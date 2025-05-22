// Copy button functionality
document.querySelectorAll('.copy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const input = btn.previousElementSibling;
    input.select();
    document.execCommand('copy');
    btn.textContent = 'Copied';
    setTimeout(() => btn.textContent = 'Copy', 2000);
  });
});
// Reveal QR code
const revealBtn = document.getElementById('reveal-btn');
const qrContainer = document.querySelector('.qr-container');
revealBtn.addEventListener('click', () => {
  qrContainer.classList.toggle('hidden');
});
