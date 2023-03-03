import { Box, Container, Link, Typography } from "@mui/material"
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import { HeadTag } from "../components/layouts/HeadTag"
import { PageTitle } from "../components/PageTitle"

function Blog() {
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
        </Box>
      </Container>
      <Footer />
    </main>
    </>
  )
};

export default Blog