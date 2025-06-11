import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    // 1. Create Ethereal test account
    const testAccount = await nodemailer.createTestAccount();

    // 2. Create transporter using Ethereal SMTP
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });

    // 3. Send email
    const info = await transporter.sendMail({
      from: `"Support" <${testAccount.user}>`,
      to: email,
      subject: 'Reset Your Password',
      html: `
        <p>You requested a password reset</p>
        <a href="http://localhost:3000/reset-password?token=dummytoken">Reset Password</a>
      `,
    });

    // 4. Preview link
    console.log('📧 Preview URL:', nodemailer.getTestMessageUrl(info));

    return res.status(200).json({ message: 'Email sent (preview link in console)' });

  } catch (error) {
    console.error('❌ Error sending email:', error);
    return res.status(500).json({ message: 'Server error while sending email' });
  }
}
