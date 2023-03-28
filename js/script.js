let contador = 0;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
const divs = document.querySelectorAll('.post');
divs.forEach(div => {
  div.addEventListener('click', (event) => {
    selecionarPost(event);
  });
});

function selecionarPost(event) {
  if (contador1 == 1 && contador2 == 1 && contador3 == 1){
    alert("Grupo já selecionado!")
    }else{
    // Remove a classe de seleção de todas as divs de posts
    const posts = document.querySelectorAll('.post');
      if (contador === 3){
        posts.forEach(post => post.classList.remove('post-selecionada'));
        contador = 0;
        contador1 = 0;
        contador2 = 0;
        contador3 = 0;
        }
      // Adiciona a classe de seleção na div clicada
      const divClicada = event.target.closest('.post');
      var divPai = divClicada.parentNode;
      var classeDivPai = divPai.classList[0];
      if (classeDivPai === 'postagens1' && contador1 < 1){
      contador1 += 1;
      contador += 1;
      divClicada.classList.add('post-selecionada');
      console.log(divClicada.innerText);
      }else if(classeDivPai === 'postagens2' && contador2 < 1){
      contador2 += 1;
      contador += 1;
      divClicada.classList.add('post-selecionada');
      console.log(divClicada.innerText);
      }else if(classeDivPai === 'postagens3' && contador3 < 1){
      contador3 += 1;
      contador += 1;
      divClicada.classList.add('post-selecionada');
      console.log(divClicada.innerText);
      }
    }
  }


function adicionarPostagem() {
  const novaPostagem = document.createElement('div');
  novaPostagem.classList.add('post');

  const listaImagens = ['clara.png', 'monique1.png', 'ruivo.png', 'frogao.png', 'thais.png'];
  const imagemAleatoria = listaImagens[Math.floor(Math.random() * listaImagens.length)];

  novaPostagem.style.backgroundImage = `url(./static/img/${imagemAleatoria})`;

  const row1 = document.querySelector('.postagens1');
  row1.appendChild(novaPostagem);
}


