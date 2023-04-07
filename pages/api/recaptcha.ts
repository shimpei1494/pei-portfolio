import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse<boolean>) {
  // reCAPTCHA認証サーバーに認証リクエストをPOSTし、認証結果を受け取る
  const serverSecretKey = `secret=${process.env.RECAPTCHA_SERVER_SECRET_KEY}&response=${req.body.token}`;
  const responce_recaptcha = await fetch(
    "https://www.google.com/recaptcha/api/siteverify",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: serverSecretKey,
    }
  );
  const responceJson_recaptcha = await responce_recaptcha.json();
  console.log(responceJson_recaptcha);

  // リキャプチャが成功したらstatus200を返す
  if (responceJson_recaptcha.success === true) {
    res.status(200).end();
  } else {
    res.status(500).end();
  }

}