import { Avatar, Divider, Typography } from '@mui/material'
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
          <Stack divider={<Divider orientation="horizontal"/>} spacing={6} mt={4}>
            <Box>
              <Typography variant="h4">
                About this site
              </Typography>
              <Typography variant='subtitle1'>
                このサイトはWebエンジニアPeishimのポートフォリオサイトです。<br/>
                プロフィール、作成したアプリ、ブログ等を紹介しています。
              </Typography>
            </Box>
            <Box>
              <Typography variant="h4" mb={4}>
                Profile
              </Typography>
              <Stack direction="row" spacing={6}>
                <Box>
                  <Avatar alt="peishim_avatar" src="/images/profile/profile_avatar.jpg" sx={{ width: 180, height: 180 }} />
                  <Typography variant='subtitle1' align='center' mt={2}> Peishim </Typography>
                </Box>
                <Box>
                  東北大学大学院を工学部（材料系）で修了後、大手鉄道会社に就職。<br/>
                  プログラミングスクールを経て2022年9月からWebエンジニアに転職。<br/>
                  プログラミングを通して、いろんなことに挑戦したいスノボ好きのエンジニアです。
                </Box>
              </Stack>
            </Box>
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