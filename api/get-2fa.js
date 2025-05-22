import { totp } from 'otplib';

// Configure TOTP for 30-second step without tolerance window
totp.options = { step: 30, window: 0 };

// Use environment variable or fallback secret
const SECRET = process.env.TOTP_SECRET?.trim() || 'WBIPYXCCCYYNBQS5TJII3HXISMZLJ3ZL';

export default function handler(req, res) {
  // Generate fresh code
  const code = totp.generate(SECRET);

  // No caching: each request yields current code
  res.setHeader('Cache-Control', 'no-store, max-age=0');
  res.status(200).json({ code });
}
