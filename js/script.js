const btnAdicionarPostagem1 = document.getElementById("adicionar-post1");
const btnAdicionarPostagem2 = document.getElementById("adicionar-post2");
const btnAdicionarPostagem3 = document.getElementById("adicionar-post3");
const postagens1 = document.querySelector(".postagens1");
const postagens2 = document.querySelector(".postagens2");
const postagens3 = document.querySelector(".postagens3");

btnAdicionarPostagem1.addEventListener("click", () => {
  const novaPostagem = document.createElement('div');
  novaPostagem.classList.add('img-post');

  const listaImagens = ['clara.png', 'monique1.png', 'ruivo.png', 'frogao.png', 'thais.png'];
  const imagemAleatoria = listaImagens[Math.floor(Math.random() * listaImagens.length)];

  novaPostagem.style.backgroundImage = `url(./static/img/${imagemAleatoria})`;

  const row1 = document.querySelector('.postagem1');
  row1.appendChild(novaPostagem);
});
// btnAdicionarPostagem1.addEventListener("click", () => {
//   const novaPostagem = document.createElement("div");
//   novaPostagem.classList.add("post");
//   postagens1.appendChild(novaPostagem);
// });
btnAdicionarPostagem2.addEventListener("click", () => {
  const novaPostagem = document.createElement("div");
  novaPostagem.classList.add("post");
  postagens2.appendChild(novaPostagem);
});
btnAdicionarPostagem3.addEventListener("click", () => {
  const novaPostagem = document.createElement("div");
  novaPostagem.classList.add("post");
  postagens3.appendChild(novaPostagem);
});

// function adicionarPostagem() {
//   const novaPostagem = document.createElement('div');
//   novaPostagem.classList.add('post');

//   const listaImagens = ['clara.png', 'monique1.png', 'ruivo.png', 'frogao.png', 'thais.png'];
//   const imagemAleatoria = listaImagens[Math.floor(Math.random() * listaImagens.length)];

//   novaPostagem.style.backgroundImage = `url(./static/img/${imagemAleatoria})`;

//   const row1 = document.querySelector('.postagens1');
//   row1.appendChild(novaPostagem);
// }

function adicionarPostagem() {
  const novaPostagem = document.createElement('div');
  novaPostagem.classList.add('post');

  const listaImagens = ['clara.png', 'monique1.png', 'ruivo.png', 'frogao.png', 'thais.png'];
  const imagemAleatoria = listaImagens[Math.floor(Math.random() * listaImagens.length)];

  novaPostagem.style.backgroundImage = `url(./static/img/${imagemAleatoria})`;

  const row1 = document.querySelector('.postagens1');
  row1.appendChild(novaPostagem);
}


