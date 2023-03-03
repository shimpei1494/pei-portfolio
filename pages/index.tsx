import { GitHub } from '@mui/icons-material'
import { Box, Container, Stack, Avatar, Card, CardActionArea, CardContent, CardMedia, Divider, Link, Typography } from '@mui/material'
import NextLink from 'next/link'
import { Footer } from '../components/layouts/Footer'
import Header from '../components/layouts/Header'
import { HeadTag } from '../components/layouts/HeadTag'
import { MoreButton } from '../components/MoreButton'
import { TopPageSubTitle } from '../components/TopPageSubTitle'

export default function Home() {
  return (
    <>
      <HeadTag />
      <main>
        <Header />
        {/* 画像はスマホサイズでいい感じに表示されないようであれば、非表示にする */}
        <img src="/images/top-snowboard3.jpeg" width="100%" alt="Topページのスノーボード画像" />
        <Container maxWidth='md'>
          <Stack divider={<Divider orientation="horizontal"/>} spacing={10} mt={6}>
            {/* サイト紹介部分 */}
            <Box>
              <TopPageSubTitle subtitle='About this site.' />
              <Typography variant='subtitle1' mt={4}>
                このサイトはWebエンジニアPeishimのポートフォリオサイトです。<br/>
                プロフィール、作成したアプリ、ブログ等を紹介しています。
              </Typography>
            </Box>
            {/* profile部分 */}
            <Box>
              <Stack direction="row" alignItems='center' spacing={4} mb={4}>
                <TopPageSubTitle subtitle='Profile.' />
                <MoreButton url='/profile'/>
              </Stack>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={6}>
                <Box>
                  <Stack alignItems='center'>
                    <Avatar alt="peishim_avatar" src="/images/profile/profile_avatar.jpg" sx={{ width: 180, height: 180 }} />
                  </Stack>
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
                  <TopPageSubTitle subtitle='Tech Blog.' />
                  <MoreButton url='/blog'/>
                </Stack>
                <Container>
                  <img src='/images/zenn-logo.png' alt='zennのロゴ' width='50%' />
                </Container>
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
              <Stack direction="row" alignItems='center' spacing={4} mb={4}>
                <TopPageSubTitle subtitle='Works.' />
                <MoreButton url='/works'/>
              </Stack>
              <Typography mb={2}>
                自分が作った公開中のアプリをまとめています。<br/>
                個人開発なので、できるだけ費用はかからないように心がけています。
              </Typography>
              <NextLink href='https://anime-list-search-nine.vercel.app/' target="_blank" rel="noopener noreferrer">
                <Card variant='outlined' sx={{ maxWidth: 500}}>
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        最新のアプリ
                      </Typography>
                      <Typography variant="body2">
                        アニメのリストをクールごとに表示することができます。
                      </Typography>
                    </CardContent>
                    <CardMedia
                      component="img"
                      height="300"
                      image="/images/works/anime-list.png"
                      alt="アニメリスト検索アプリ"
                    />
                  </CardActionArea>
                </Card>
              </NextLink>
            </Box>
            {/* 趣味紹介部分 */}
            <Box>
              <Stack direction="row" alignItems='center' spacing={4} mb={2}>
                <TopPageSubTitle subtitle='Hobby.' />
                <MoreButton url='/hobby'/>
              </Stack>
              <Typography>
                プログラミングとは関係のないただの趣味を気まぐれで紹介します。<br/>
                興味のある人のみ、ゆる〜く見てください。
              </Typography>
            </Box>
            {/* Contact部分 */}
            <Box>
              <Stack direction="row" alignItems='center' spacing={4} mb={2}>
                <TopPageSubTitle subtitle='Contact.' />
                <MoreButton url='/contact'/>
              </Stack>
              <Typography>
                このサイトに関することや私「peishim」に何か伝えたいことがあれば、<br/>
                お問い合わせフォームよりご連絡できます。
              </Typography>
            </Box>
          </Stack>
        </Container>
        <Footer />
      </main>
    </>
  )
}