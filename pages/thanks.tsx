import { Box, Container, Typography } from "@mui/material"
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import { HeadTag } from "../components/layouts/HeadTag"
import { PageTitle } from "../components/PageTitle"

function Thanks() {
  return (
    <>
    <HeadTag />
    <main>
      <Header />
      <Container maxWidth='md'>
        <Box mb={6}>
          <PageTitle title="Thanks." />
          <Typography align='center'>
            お問い合わせのメールは正常に送信されました。<br/>
          </Typography>
          <Box height="65vh"></Box>
        </Box>
      </Container>
      <Footer />
    </main>
    </>
  )
};

export default Thanks