import { GitHub } from '@mui/icons-material'
import { Avatar, Divider, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import NextLink from 'next/link'
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
                  <Stack direction="row" justifyContent="center" spacing={2} mt={2}>
                    <Typography variant='subtitle1'> Peishim </Typography>
                    <NextLink href='https://github.com/shimpei1494' target="_blank" rel="noopener noreferrer">
                      <GitHub sx={{ color: '#4b0082' }}/>
                    </NextLink>
                  </Stack>
                </Box>
                <Box>
                  <Box sx={{backgroundColor: '#283593', opacity: 0.8,}} mb={1} py={1}>
                    <Typography color={'white'}>
                      自己紹介
                    </Typography>
                  </Box>
                  <Typography>
                    東北大学大学院を工学部（材料系）で修了後、大手鉄道会社に就職。<br/>
                    プログラミングスクールを経て2022年9月からWebエンジニアに転職。<br/>
                    プログラミングを通して、いろんなことに挑戦したいスノボ好きのエンジニアです。
                  </Typography>
                  <Box sx={{backgroundColor: '#283593', opacity: 0.8,}} my={1} py={1}>
                    <Typography color={'white'}>
                      主なスキル
                    </Typography>
                  </Box>
                  <Typography>
                    フロント：Next.js, JS, TS<br/>
                    バック：Rails<br/>
                    インフラ：Docker, AWS(EC2,S3等), Vercel
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Box>
            <Typography variant="h4" mb={4}>
              Tech Blog
            </Typography>

              ブログの紹介
            </Box>
            <Box>
              <Typography variant="h4" mb={4}>
                Create Works
              </Typography>
              アプリ紹介
            </Box>
            <Box>
              <Typography variant="h4" mb={4}>
                Hobby
              </Typography>
              趣味
            </Box>
            <Box>
              <Typography variant="h4" mb={4}>
                Contact
              </Typography>
              問い合わせ
            </Box>
          </Stack>
        </Container>
      </main>
    </>
  )
}