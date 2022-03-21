// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { sendNodeMail } from '../../nodemailer';

type Data = {
  name: String;
  email: String;
  message: String;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { name, email, message } = req.body;
  try {
    const result = await sendNodeMail(
      {
        user: process.env.APP_GMAIL_ACCOUNT,
        pass: process.env.APP_PASSWORD,
      },
      {
        name,
        email,
        message,
      }
    );

    res.status(200).json({ name, email, message });
  } catch (error) {
    res.status(500);
  }
}
