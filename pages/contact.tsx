import { Box, Container, Typography } from "@mui/material"
import React from "react";
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import { HeadTag } from "../components/layouts/HeadTag"



function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("メール送信");
  };

  return (
    <>
    <HeadTag />
    <main>
      <Header />
      <Container maxWidth='md'>
        <Box mb={6}>
          <Typography variant="h2" align='center' sx={{textDecoration: 'underline'}} mb={2}>
            Contact
          </Typography>
          <Typography align='center'>
            このページはお問い合わせページです。<br/>
          </Typography>
        </Box>
        <Box>
          <form onSubmit={(e) => handleSubmit(e)}>

          </form>
        </Box>
      </Container>
      <Footer />
    </main>
    </>
  )
};

export default Contact