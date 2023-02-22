import { GitHub } from '@mui/icons-material'
import { Avatar, Divider, Link, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import NextLink from 'next/link'
import Header from '../components/layouts/Header'
import { HeadTag } from '../components/layouts/HeadTag'
import { MoreButton } from '../components/MoreButton'

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
            {/* サイト紹介部分 */}
            <Box>
              <Typography variant="h4">
                About this site
              </Typography>
              <Typography variant='subtitle1'>
                このサイトはWebエンジニアPeishimのポートフォリオサイトです。<br/>
                プロフィール、作成したアプリ、ブログ等を紹介しています。
              </Typography>
            </Box>
            {/* profile部分 */}
            <Box>
              <Stack direction="row" alignItems='center' spacing={4} mb={4}>
                <Typography variant="h4">
                  Profile
                </Typography>
                <MoreButton url='/profile'/>
              </Stack>
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
                  <Box sx={{backgroundColor: 'primary.main', opacity: 0.8,}} mb={1} pl={1} py={1}>
                    <Typography color={'white'}>
                      自己紹介
                    </Typography>
                  </Box>
                  <Typography>
                    東北大学大学院を工学部（材料系）で修了後、大手鉄道会社に就職。<br/>
                    プログラミングスクールを経て2022年9月からWebエンジニアに転職。<br/>
                    プログラミングを通して、いろんなことに挑戦したいスノボ好きのエンジニアです。
                  </Typography>
                  <Box sx={{backgroundColor: 'primary.main', opacity: 0.8,}} my={1} pl={1} py={1}>
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
            {/* ブログ紹介部分 */}
            <Box>
              <Stack spacing={2}>
                <Stack direction="row" alignItems='center' spacing={4} mb={2}>
                  <Typography variant="h4">
                    Tech Blog
                  </Typography>
                  <MoreButton url='/blog'/>
                </Stack>
                <img src='/images/zenn-logo.png' alt='zennのロゴ' width='50%' />
                <Typography>
                  2023年1月から週1ペースでZennの技術ブログを書き、アウトプットしています。<br/>
                  <Link href='https://zenn.dev/peishim' target="_blank" rel="noopener noreferrer">Zennの個人ページ</Link><br/>
                  <br/>
                  このサイトでは、私の記事をわかりやすくまとめる機能を持っています。<br/>
                  具体的にはおすすめ記事のピックアップ、使用技術ごとに記事を抽出することができます。
                </Typography>
              </Stack>
            </Box>
            {/* Works紹介部分 */}
            <Box>
              <Typography variant="h4" mb={4}>
                Create Works
              </Typography>
              アプリ紹介
            </Box>
            {/* 趣味紹介部分 */}
            <Box>
              <Typography variant="h4" mb={4}>
                Hobby
              </Typography>
              趣味
            </Box>
            {/* Contact部分 */}
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