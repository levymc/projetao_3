const divs = document.querySelectorAll('.post');
divs.forEach(div => {
  div.addEventListener('click', (event) => {
    selecionarPost(event);
  });
});
let contador = 0;
function selecionarPost(event) {
  // Remove a classe de seleção de todas as divs de posts
  const posts = document.querySelectorAll('.post');
  if (contador >= 3){
    posts.forEach(post => post.classList.remove('post-selecionada'));
    contador = 0;
  }
  // Adiciona a classe de seleção na div clicada
  const divClicada = event.target.closest('.post');
  divClicada.classList.add('post-selecionada');
  contador += 1;
  console.log(contador)
  // Imprime o conteúdo da div selecionada no console
  console.log(divClicada.innerText);
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


