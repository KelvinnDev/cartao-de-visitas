const btnEmail = document.getElementById('btn-copiar-email');
const email = 'kelvintelis10@gmail.com';

btnEmail.addEventListener('click', () => {
  navigator.clipboard.writeText(email).then(() => {
    const textoOriginal = btnEmail.textContent;
    
    btnEmail.textContent = 'E-mail copiado!';
    btnEmail.classList.add('copiado');

    setTimeout(() => {
      btnEmail.textContent = textoOriginal;
      btnEmail.classList.remove('copiado');
    }, 2000);
  });
});