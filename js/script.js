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
  // Remove a classe de seleção de todas as divs de posts
  const posts = document.querySelectorAll('.post');
  if (contador == 3) {
    posts.forEach(post => post.classList.remove('post-selecionada'));
    contador = 0;
    contador1 = 0;
    contador2 = 0;
    contador3 = 0;
  }

  // Adiciona a classe de seleção na div clicada
  const divClicada = event.target.closest('.post');
  const divPai = divClicada.parentNode;
  const classeDivPai = divPai.classList[0];
  let itemJaSelecionado = false;

  // Verifica se já há algum item selecionado na mesma categoria da div clicada
  if (classeDivPai == 'postagens1') {
    if (contador1 > 0) {
      itemJaSelecionado = true;
      const postagens1 = document.querySelectorAll('.postagens1 .post-selecionada');
      postagens1.forEach(post => post.classList.remove('post-selecionada'));
      contador -= contador1;
      contador1 = 0;
    }
  } else if (classeDivPai == 'postagens2') {
    if (contador2 > 0) {
      itemJaSelecionado = true;
      const postagens2 = document.querySelectorAll('.postagens2 .post-selecionada');
      postagens2.forEach(post => post.classList.remove('post-selecionada'));
      contador -= contador2;
      contador2 = 0;
    }
  } else if (classeDivPai == 'postagens3') {
    if (contador3 > 0) {
      itemJaSelecionado = true;
      const postagens3 = document.querySelectorAll('.postagens3 .post-selecionada');
      postagens3.forEach(post => post.classList.remove('post-selecionada'));
      contador -= contador3;
      contador3 = 0;
    }
  }

  // Adiciona a classe de seleção na div clicada, caso não haja item já selecionado na mesma categoria
  if (!itemJaSelecionado) {
    divClicada.classList.add('post-selecionada');
    console.log(divClicada.innerText);
    if (classeDivPai == 'postagens1') {
      contador1 += 1;
    } else if (classeDivPai == 'postagens2') {
      contador2 += 1;
    } else if (classeDivPai == 'postagens3') {
      contador3 += 1;
    }
    contador += 1;
  }

  // Verifica se já foram selecionados 3 itens para ativar o botão
  if (contador == 3) {
    const orderBtn = document.querySelector('[data-test="order-btn"]');
    orderBtn.removeAttribute('disabled');
    orderBtn.style.backgroundColor = '#50D074';
    orderBtn.textContent = 'Fechar pedido';
    orderBtn.classList.add('cursor-pointer');
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


