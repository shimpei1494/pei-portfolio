
import { GitHub } from "@mui/icons-material"
import { Avatar, Box, Chip, Container, Stack, Typography } from "@mui/material"
import NextLink from "next/link"
import { useState } from "react"
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import { HeadTag } from "../components/layouts/HeadTag"

function Profile() {
  return (
    <>
      <HeadTag />
      <main>
      <Header />
        <Container maxWidth='md'>
          <Box mb={6}>
            <Typography variant="h2" align='center' sx={{textDecoration: 'underline'}} mb={2}>
              profile
            </Typography>
            <Typography align='center'>
              このページでは少し詳細なプロフィールを紹介します。
            </Typography>
          </Box>
          <Stack spacing={6}>
            <Box>
              <Stack alignItems='center'>
                <Avatar alt="peishim_avatar" src="/images/profile/profile_avatar.jpg" sx={{ width: 300, height: 300 }} />
              </Stack>
              <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} mt={2}>
                <Typography variant='h4'> Peishim </Typography>
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
                  扱ったことのある技術全般　　　※色付きは最近よく使う技術
                </Typography>
              </Box>
              <Typography my={1}>
                フロントエンド
              </Typography>
              <Stack direction='row' spacing={1}>
                <Chip label="HTML" variant="outlined" color="secondary" />
                <Chip label="CSS" variant="outlined" color="secondary" />
                <Chip label="JavaScript" variant="outlined" color="secondary" />
                <Chip label="TypeScript" color="secondary" />
                <Chip label="Next.js" color="secondary" />
                <Chip label="React" variant="outlined" color="secondary" />
                <Chip label="JQuery" variant="outlined" color="secondary" />
              </Stack>
              <Typography my={1}>
                バックエンド
              </Typography>
              <Stack direction='row' spacing={1}>
                <Chip label="Ruby" variant="outlined" color="secondary" />
                <Chip label="Rails" color="secondary" />
              </Stack>
              <Typography my={1}>
                インフラ
              </Typography>
              <Stack direction='row' spacing={1}>
                <Chip label="Docker" color="secondary" />
                <Chip label="EC2" variant="outlined" color="secondary" />
                <Chip label="S3" variant="outlined" color="secondary" />
                <Chip label="Route53" variant="outlined" color="secondary" />
                <Chip label="Vercel" color="secondary" />
              </Stack>
            </Box>
          </Stack>
        </Container>
      <Footer />
      </main>
    </>
  )
};

export default Profile