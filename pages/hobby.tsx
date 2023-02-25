import { Box, Container, Typography } from "@mui/material"
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import { HeadTag } from "../components/layouts/HeadTag"

function Hobby() {
  return (
    <>
    <HeadTag />
    <main>
      <Header />
      <Container maxWidth='md'>
        <Box mb={6}>
          <Typography variant="h2" align='center' sx={{textDecoration: 'underline'}} mb={2}>
            hobby
          </Typography>
          <Typography align='center'>
            このページではエンジニアとなんの関係もない私の趣味を紹介します。<br/>
            興味がある人のみ、ゆる〜く見てください。
          </Typography>
        </Box>
      </Container>
      <Footer />
    </main>
    </>
  )
};

export default Hobby