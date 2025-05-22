import { totp } from 'otplib';
const SECRET = 'WBIPYXCCCYYNBQS5TJII3HXISMZLJ3ZL';
export default function handler(req, res) {
  const code = totp.generate(SECRET);
  res.status(200).json({ code });
}
