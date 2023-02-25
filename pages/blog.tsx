import { Box, Container, Typography } from "@mui/material"
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import { HeadTag } from "../components/layouts/HeadTag"

function Blog() {
  return (
    <>
    <HeadTag />
    <main>
      <Header />
      <Container maxWidth='md'>
        <Box mb={6}>
          <Typography variant="h2" align='center' sx={{textDecoration: 'underline'}} mb={2}>
            blog
          </Typography>
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