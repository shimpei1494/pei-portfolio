import { Card, CardContent, Chip, Grid, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { useEffect, useState } from "react";
import { getDateStr } from "../../../libs/getDateStr";
import { PeiBlog } from "../../../types/blog";

export function BlogCard(props: {blog: PeiBlog, selectTag: string, key: string}) {
  // メモ：1回のタグ切り替えで記事×2回分のレンダリングが発生している

  const blog = props.blog;
  const selectTag = props.selectTag;

  // 記事の表示・非表示state
  const [visible, setVisible] = useState<boolean>(blog.visible);

  useEffect (() => {
    if (selectTag === '全ての記事') {
      setVisible(true);
    } else {
      const tagNameList: string[] = blog.tags.map((tag) => tag.name);
      if (tagNameList.includes(selectTag)) {
        setVisible(true)
      } else {
        setVisible(false);
      }
    }
  }, [selectTag])

  return (
    <Grid item xs={12} md={4} key={blog.id} style={{display: visible? "block" : "none"}}>
    <NextLink href={blog.url} target="_blank" rel="noopener noreferrer">
      <Card variant="outlined" style={{backgroundColor: "#fff8dc", display: visible? "block" : "none"}} >
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
  );
}