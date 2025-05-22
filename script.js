document.addEventListener('DOMContentLoaded', () => {
  // Copy buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = document.getElementById(btn.dataset.target);
      navigator.clipboard.writeText(target.value);
      btn.innerText = 'Copied';
      btn.classList.add('copied');
      setTimeout(() => {
        btn.innerText = 'Copy';
        btn.classList.remove('copied');
      }, 1500);
    });
  });

  // Reveal and generate QR for 2FA code
  const revealBtn = document.getElementById('reveal-btn');
  const qrContainer = document.getElementById('qr');
  revealBtn.addEventListener('click', async () => {
    revealBtn.disabled = true;
    revealBtn.innerText = 'Loading...';
    qrContainer.innerHTML = '';
    try {
      const res = await fetch('/api/get-2fa', { cache: 'no-store' });
      const { code } = await res.json();
      // Generate QR code from the OTP code
      QRCode.toCanvas(code, { errorCorrectionLevel: 'H' }, (err, canvas) => {
        if (err) throw err;
        qrContainer.appendChild(canvas);
      });
    } catch (err) {
      qrContainer.innerText = 'Error';
      console.error(err);
    } finally {
      revealBtn.disabled = false;
      revealBtn.innerText = 'Reveal QR Code';
    }
  });
});
