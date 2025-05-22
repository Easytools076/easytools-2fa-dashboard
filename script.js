import { authenticator } from 'https://esm.sh/otplib';

const SECRET = 'WBIPYXCCCYYNBQS5TJII3HXISMZLJ3ZL';

document.getElementById('reveal-btn').onclick = () => {
  const code = authenticator.generate(SECRET.trim());
  document.getElementById('code').textContent = code;
  const btn = document.getElementById('reveal-btn');
  btn.textContent = 'Copied';
  btn.classList.add('copied');
  navigator.clipboard.writeText(code);
  setTimeout(() => {
    btn.textContent = 'Reveal Code';
    btn.classList.remove('copied');
  }, 1500);
};

window.copy = (id, btn) => {
  const val = document.getElementById(id).value;
  navigator.clipboard.writeText(val).then(() => {
    btn.textContent = 'Copied';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copy';
      btn.classList.remove('copied');
    }, 1500);
  });
};