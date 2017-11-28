// js/contato.js
function validaFormulario() {
  var erro     = document.querySelectorAll('#msg-erro')[0];
  var nome     = document.querySelectorAll('#nome')[0];
  var email    = document.querySelectorAll('#email')[0];
  var mensagem = document.querySelectorAll('#mensagem')[0];
  
  if (nome.value == ''){
    erro.innerHTML = 'Nome inválido!';
    erro.style.display = 'block';
    
    nome.focus();
    return false;
  }
  
  if (email.value == ''){
    erro.innerHTML = 'E-mail inválido!';
    erro.style.display = 'block';
    
    email.focus();
    return false;
  }
  
  var email_regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if(!email_regex.test(email.value)){
    erro.innerHTML = 'E-mail em formato inválido!';
    erro.style.display = 'block';
    
    email.focus();
    return false;
  }
  
  
  
  if (mensagem.value == ''){
    erro.innerHTML = 'Mensagem inválida!';
    erro.style.display = 'block';
    
    mensagem.focus();
    return false;
  }  
  
  return true; // manda o formulario seguir adiante
}