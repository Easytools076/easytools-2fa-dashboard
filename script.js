function copyText(id, btn) {
  const text = document.getElementById(id).innerText;
  navigator.clipboard.writeText(text).then(() => {
    btn.innerText = 'COPIED';
    btn.classList.add('copied');
    setTimeout(() => { btn.innerText = 'Copy'; btn.classList.remove('copied'); }, 1500);
  });
}
function openConfirmation() {
  document.getElementById('confirmationModal').style.display = 'flex';
}
function closeConfirmation() {
  document.getElementById('confirmationModal').style.display = 'none';
}
function showCode() {
  closeConfirmation();
  fetch('/api/get-2fa').then(r=>r.json()).then(data=>{
    document.getElementById('codeDisplay').innerText = data.code;
    document.getElementById('codeModal').style.display = 'flex';
  });
}
function closeCode() {
  document.getElementById('codeModal').style.display = 'none';
}
