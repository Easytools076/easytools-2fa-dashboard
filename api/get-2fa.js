import { totp } from 'otplib';
totp.options = { step: 30, window: 0 };
const SECRET = process.env.TOTP_SECRET?.trim() || 'WBIPYXCCCYYNBQS5TJII3HXISMZLJ3ZL';
export default function handler(req, res) {
  const code = totp.generate(SECRET);
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.status(200).json({ code });
}
