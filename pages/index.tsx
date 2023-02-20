import { Divider } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import Header from '../components/Header'
import { HeadTag } from '../components/HeadTag'

export default function Home() {
  return (
    <>
      <HeadTag />
      <main>
        <Header />
        {/* 画像はスマホサイズでいい感じに表示されないようであれば、非表示にする */}
        <img src="/images/top-snowboard3.jpeg" width="100%" alt="Topページのスノーボード画像" />
        <Container maxWidth='md'>
          <Stack divider={<Divider orientation="horizontal"/>} spacing={2}>
            <Box>このサイトの説明</Box>
            <Box>自己紹介とスキル、キャリア</Box>
            <Box>ブログの紹介</Box>
            <Box>アプリ紹介</Box>
            <Box>趣味</Box>
            <Box>問い合わせ</Box>
          </Stack>
        </Container>
      </main>
    </>
  )
}