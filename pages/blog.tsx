import { Box, Container, Typography } from "@mui/material"
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
            このページではブログを紹介。<br/>
          </Typography>
        </Box>
      </Container>
      <Footer />
    </main>
    </>
  )
};

export default Blog