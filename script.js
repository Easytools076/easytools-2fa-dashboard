document.getElementById('copy-email').onclick = () => {
  navigator.clipboard.writeText('easytools22@outlook.com');
};
document.getElementById('copy-pass').onclick = () => {
  navigator.clipboard.writeText('%1?QbzS1');
};
document.getElementById('reveal').onclick = async () => {
  const res = await fetch('/api/get-2fa');
  const { code } = await res.json();
  document.getElementById('code-display').textContent = code;
};
