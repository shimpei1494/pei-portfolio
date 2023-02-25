import { Snowboarding } from "@mui/icons-material"
import { Box, Container, Typography } from "@mui/material"
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import { HeadTag } from "../components/layouts/HeadTag"
import { SnowYoutube } from "../components/SnowYoutube"

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
        <Typography variant="h2" align='center' color='secondary' mb={2}>
          Snowboard <Snowboarding fontSize="large" />
        </Typography>
        <Typography align="center">
          大学時代の6年間で合計170回ほどスノボに行くほど、スノボにハマっていました。<br/>
          最近では行く回数も減りましたが、昔は動画も作ったりしていました。
        </Typography>
        <SnowYoutube />
      </Container>
      <Footer />
    </main>
    </>
  )
};

export default Hobby