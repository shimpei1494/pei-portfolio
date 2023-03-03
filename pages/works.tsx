import { Box, Container, Typography } from "@mui/material"
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import { HeadTag } from "../components/layouts/HeadTag"
import { PageTitle } from "../components/PageTitle"

function Works() {
  return (
    <>
    <HeadTag />
    <main>
      <Header />
      <Container maxWidth='md'>
        <Box mb={6}>
          <PageTitle title="Works." />
          <Typography align='center'>
            このページでは作成したアプリを紹介します。<br/>
          </Typography>
        </Box>
      </Container>
      <Footer />
    </main>
    </>
  )
};

export default Works