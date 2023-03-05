import { Box, Container, FormControl, Grid, InputLabel, Link, MenuItem, Select, SelectChangeEvent, Typography } from "@mui/material"
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import { HeadTag } from "../components/layouts/HeadTag"
import { PageTitle } from "../components/PageTitle"
import { client } from "../libs/client"
import { BlogTag, PeiBlog} from "../types/blog"
import { useState } from "react"
import { BlogCard } from "../components/Blog/BlogCard"

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
  const blogs = await client.get({ endpoint: "pei_blog?limit=50" });
  const tags = await client.get({ endpoint: "blog_tag?limit=25" });
  blogs.contents.map((blog: PeiBlog) => blog.visible = true)

  return {
    props: {
      blogs: blogs.contents,
      tags: tags.contents,
    },
  };
};

// Props（blogsとtags）の型
type Props = {
  blogs: PeiBlog[];
  tags: BlogTag[];
};

function Blog({blogs,tags}: Props) {
  // タグ選択state
  const ALLARTICLE: string = "全ての記事" 
  const [selectTag, setSelectTag] = useState<string>(ALLARTICLE);
  const handleTagSelect = (e: SelectChangeEvent<string>) => {
    setSelectTag(e.target.value);
  };

  // 表示内容
  return (
    <>
      <HeadTag />
      <main>
        <Header />
        <Container maxWidth='md'>
          <Box mb={6}>
            <PageTitle title="Blog." />
            {/* ページの説明 */}
            <Typography align='center'>
              週１ペースでZennに技術ブログを書いています（<Link href="https://zenn.dev/peishim" target="_blank" rel="noopener noreferrer">Zenn個人ページ</Link> ）<br/>
              このページでは私が書いたブログをタグ検索することができます。
            </Typography>
            {/* タグ選択 */}
            <Box my={2} sx={{ display: 'flex', justifyContent: 'center'}} >
              <FormControl variant="outlined" sx={{ m: 1, minWidth: 200 }} >
                <InputLabel id="select-tag-label" color="primary" >Tag</InputLabel>
                <Select labelId="select-tag-label" id="select-tag" value={selectTag} label="Tag" onChange={e => handleTagSelect(e)}>
                  <MenuItem value={ALLARTICLE} >{ALLARTICLE}</MenuItem>
                  {tags.map((tag) => ( <MenuItem value={tag.name} key={tag.name}>{tag.name}</MenuItem> ))}
                </Select>
              </FormControl>
            </Box>
            {/* ブログへのリンク */}
            <Box mt={6}>
              <Grid container spacing={4} >
                {blogs.map((blog) => (
                  // selectTagによって表示・非表示が切り替わる
                  <BlogCard blog={blog} selectTag={selectTag} key={blog.id} />
                ))}
              </Grid>
            </Box>
          </Box>
        </Container>
        <Footer />
      </main>
    </>
  )
};

export default Blog