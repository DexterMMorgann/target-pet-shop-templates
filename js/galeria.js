/* galeria.js */
function mostraCao(nomeImagem, racaCao) {
  var grande = document.querySelectorAll('#dog-big')[0];
  grande.src = 'img/dogs/' + nomeImagem;
  
  var titulo = document.querySelectorAll('#dog-name')[0];
  titulo.innerHTML = racaCao;  
}

function cria(){
  var p = document.createElement('p');
  p.id = 'P1';
  p.innerHTML = 'texto do paragrafo';

  var mini = document.querySelectorAll('.miniaturas')[0];
  mini.appendChild(p);
  
}