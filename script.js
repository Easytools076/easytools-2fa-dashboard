document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(btn.getAttribute('data-copy'));
    btn.textContent = 'Copied';
    setTimeout(() => btn.textContent = 'Copy', 1500);
  });
});
const qrImg = document.getElementById('qr');
document.getElementById('reveal-btn').addEventListener('click', () => {
  qrImg.hidden = !qrImg.hidden;
});