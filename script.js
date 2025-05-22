function copyText(id) {
  const el = document.getElementById(id);
  navigator.clipboard.writeText(el.value).then(() => {
    alert('Copied: ' + el.value);
  });
}

function revealQR() {
  document.getElementById('qrImage').classList.toggle('hidden');
}
