import { Box, Card, CardContent, CardHeader, Chip, Container, Grid, Link, Stack, Typography } from "@mui/material"
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import { HeadTag } from "../components/layouts/HeadTag"
import { PageTitle } from "../components/PageTitle"
import { client } from "../libs/client"
import { BlogTag, PeiBlog } from "../types/blog"
import NextLink from 'next/link';

// APIから取得したstringの日時を日付に変換するメソッド
const getDateStr = (date: string) => {
  return new Date(date).toLocaleDateString();
};

// microCMSへAPIリクエスト
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "pei_blog" });
  const tags = await client.get({ endpoint: "blog_tag" });

  return {
    props: {
      blogs: blog.contents,
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
  return (
    <>
      <HeadTag />
      <main>
        <Header />
        <Container maxWidth='md'>
          <Box mb={6}>
            <PageTitle title="Blog." />
            <Typography align='center'>
              週１ペースでZennに技術ブログを書いています（<Link href="https://zenn.dev/peishim" target="_blank" rel="noopener noreferrer">Zenn個人ページ</Link> ）<br/>
              このページでは私がどのようなブログを書いているのか検索することができます。
            </Typography>
            <Box mt={6}>
              <Grid container spacing={4} >
                {blogs.map((blog) => (
                  <Grid item xs={12} md={4}>
                    <NextLink href={blog.url} target="_blank" rel="noopener noreferrer" key={blog.id}>
                      <Card variant="outlined" style={{backgroundColor: "#fff8dc", display: true? "block" : "none"}} >
                        <CardContent>
                          <Typography color='#a9a9a9'>
                            {getDateStr(blog.date)}
                          </Typography>
                          <Typography>
                            {blog.title}
                          </Typography>
                          <Stack direction='row' spacing={1} mt={1}>
                          {blog.tags.map((tag) => 
                            <Chip label={tag.name} variant="outlined" color="secondary" key={tag.id} size="small" />
                          )}
                          </Stack>
                        </CardContent>
                      </Card>
                    </NextLink>
                  </Grid>
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