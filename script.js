document.addEventListener('DOMContentLoaded', () => {
  // Copy buttons
  document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-target');
      const input = document.getElementById(id);
      input.select();
      navigator.clipboard.writeText(input.value);
      btn.classList.add('copied');
      btn.textContent = 'Copied';
      setTimeout(() => {
        btn.classList.remove('copied');
        btn.textContent = 'Copy';
      }, 1500);
    });
  });

  // Reveal 2FA code
  const reveal = document.getElementById('reveal-btn');
  const codeEl = document.getElementById('code');
  reveal.addEventListener('click', async () => {
    reveal.disabled = true;
    reveal.textContent = 'Loading…';
    try {
      const res = await fetch('/api/get-2fa');
      const { code } = await res.json();
      codeEl.textContent = code;
    } catch {
      codeEl.textContent = 'Error';
    } finally {
      reveal.disabled = false;
      reveal.textContent = 'Reveal Code';
    }
  });
});
