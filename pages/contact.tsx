import { Box, Button, Container, FormControl, Stack, TextField, Typography } from "@mui/material"
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Footer } from "../components/layouts/Footer"
import Header from "../components/layouts/Header"
import { HeadTag } from "../components/layouts/HeadTag"
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type ContactForm = {
  name: string
  email: string
  content: string
};

const schema = yup.object({
  name: yup.string().required('必須項目です'),
  email: yup
    .string()
    .required('必須項目です')
    .email('正しいメールアドレス入力してください'),
  content: yup
    .string().required('必須項目です'),
})

function Contact() {
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("メール送信");
  // };
  const { register, handleSubmit, formState: {errors}, } = useForm<ContactForm>({
    resolver: yupResolver(schema),
  });
  const onSubmit: SubmitHandler<ContactForm> = (data) => {
    console.log(data);
  }

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
          <FormControl fullWidth>
            <Stack spacing={3} direction='column' >
              <TextField variant="outlined" required label="お名前" {...register('name')} error={'name' in errors}  helperText={errors.name?.message} />
              <TextField variant="outlined" required label="メールアドレス" type="email" {...register('email')} error={'email' in errors}  helperText={errors.email?.message} />
              <TextField variant="outlined" required label="問い合わせ内容" multiline rows={6} {...register('content')} error={'content' in errors}  helperText={errors.content?.message} />
            </Stack>
            <Stack alignItems='center' mt={3} >
              <Button color="primary" variant="contained" size="large" sx={{width: '200px'}} onClick={handleSubmit(onSubmit)}>
                送信
              </Button>
            </Stack>
          </FormControl>
        </Box>
      </Container>
      <Footer />
    </main>
    </>
  )
};

export default Contact