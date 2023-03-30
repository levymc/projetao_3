// Declaração de variáveis a serem utilzadas nas funções abaixo
let contador = 0;
let contador1 = 0;
let contador2 = 0;
let contador3 = 0;
let conteudo1 = String();
let conteudo2 = String();
let conteudo3 = String();
const divs = document.querySelectorAll('.post');


divs.forEach(div => {  // Aqui é para qualquer div que tenha a classe .post
  div.addEventListener('click', (event) => {
    selecionarPost(event);
  });
});

function selecionarPost(event) { // Lógica para seleção das divs .post
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
      conteudo1 = divClicada.querySelector('.titulo-prato p').textContent.trim();
      conteudoPrice1 = divClicada.querySelector('[data-test="item-price"]').textContent.trim();
    } else if (classeDivPai == 'postagens2') {
      contador2 += 1;
      conteudo2 = divClicada.querySelector('.titulo-prato p').textContent.trim();
      conteudoPrice2 = divClicada.querySelector('[data-test="item-price"]').textContent.trim();
    } else if (classeDivPai == 'postagens3') {
      contador3 += 1;
      conteudo3 = divClicada.querySelector('.titulo-prato p').textContent.trim();
      conteudoPrice3 = divClicada.querySelector('[data-test="item-price"]').textContent.trim();
    }
    contador += 1;
  }

  // Verifica se já foram selecionados 3 itens para ativar o botão
  if (contador == 3) {
    const tituloDish = conteudo1.toString();
    const priceDish = parseFloat(conteudoPrice1.replace('R$', '').replace(',', '.'));
    const tituloDrink = conteudo2.toString();
    const priceDrink = parseFloat(conteudoPrice2.replace('R$', '').replace(',', '.'));
    const tituloDessert = conteudo3.toString();
    const priceDessert = parseFloat(conteudoPrice3.replace('R$', '').replace(',', '.'));

    const total = priceDessert+priceDish+priceDrink;

    const orderBtn = document.querySelector('[data-test="order-btn"]');
    orderBtn.removeAttribute('disabled');
    orderBtn.style.backgroundColor = '#50D074';
    orderBtn.textContent = 'Fechar pedido';
    orderBtn.classList.add('cursor-pointer');
    orderBtn.setAttribute('onclick',`modal('${tituloDish}', '${priceDish}','${tituloDrink}', ${priceDrink},'${tituloDessert}','${priceDessert}', '${total}')` )
  }
}

function enviarMensagem(dish, drink, dessert, total) { // Envio das msgs via Whats, com base em parâmetros da seleção
  var mensagem = `Olá, gostaria de fazer o pedido:
    - Prato: ${dish}
    - Bebida: ${drink}
    - Sobremesa: ${dessert}
  Total: R$ ${Number(total).toFixed(2).replace('.', ',')}`;
  var numero = "5516997350060";
  var url = "https://wa.me/" + numero + "?text=" + encodeURIComponent(mensagem); /* o encodeURI serve para converter a String no formato que o Whats entenda */ 
  window.open(url, '_blank'); /* O blank aqui serve para abrir a url em outra aba */
}

function fecharModal(){ // Lógica para fechar o modal no caso de clicar em Cancelar
  var modal = document.querySelector('.modal-container');
  var modalFundo = document.querySelector('.modal-background');
  var tituloModal = document.querySelector('.titulo-modal');
  var conteudoModal = document.querySelector('.conteudo-modal');
  var tableModal = document.querySelector('.table-modal');
  var btnsModal = document.querySelector('.btns-modal');
  document.body.style.overflowX = "hidden";
  document.body.style.overflowY = "auto";
  modal.remove();
  modalFundo.remove();
  tituloModal.remove();
  conteudoModal.remove();
  tableModal.remove();
  btnsModal.remove();
}

function modal(dish, dishPrice, drink, drinkPrice, dessert, dessertPrice, total) {
    // cria a div modal-container
    var modalContainer = document.createElement("div");
    modalContainer.classList.add("modal-container");
    modalContainer.style.boxShadow = "0px 0px 10px 1px rgba(0, 0, 0, 0.25)";
    modalContainer.style.borderRadius = "9px";
    modalContainer.style.backgroundColor = "#50D074";
    modalContainer.style.width = "80.063%";
    modalContainer.style.height = "22.0625em";
    modalContainer.style.display = "flex";
    modalContainer.style.flexDirection = "column";
    modalContainer.style.alignItems = "center";
    // modalContainer.style.justifyContent = "center";
    modalContainer.setAttribute('data-test', 'confirm-order-modal');

    var tituloModal = document.createElement("div");
    tituloModal.classList.add("titulo-modal");
    tituloModal.classList.add("roboto");
    tituloModal.textContent = "Confirme seu pedido";
    modalContainer.appendChild(tituloModal);
    
    var conteudoModal = document.createElement("div");
    conteudoModal.classList.add("roboto");
    conteudoModal.classList.add("conteudo-modal");

    var tabela = document.createElement("table");
    tabela.classList.add("roboto");
    tabela.classList.add('table-modal')

    // adiciona as células na tabela
    for (var i = 0; i < 4; i++) {
      var linha = document.createElement("tr");
      for (var j = 0; j < 2; j++) {
        var celula = document.createElement("td");
        linha.appendChild(celula);
      }
      tabela.appendChild(linha);
    }
    tabela.rows[0].cells[0].textContent = dish;
    tabela.rows[0].cells[1].textContent = Number(dishPrice).toFixed(2).replace('.', ',');

    tabela.rows[1].cells[0].textContent = drink;
    tabela.rows[1].cells[1].textContent = Number(drinkPrice).toFixed(2).replace('.', ',');

    tabela.rows[2].cells[0].textContent = dessert ;
    tabela.rows[2].cells[1].textContent = Number(dessertPrice).toFixed(2).replace('.', ',');
    
    tabela.rows[3].cells[0].textContent = "TOTAL";
    tabela.rows[3].cells[1].textContent = "R$ " + Number(total).toFixed(2).replace('.', ',');
    tabela.rows[3].cells[0].style.fontWeight = 'bold';
    tabela.rows[3].cells[1].style.fontWeight = 'bold';
 

    conteudoModal.appendChild(tabela);

    modalContainer.appendChild(conteudoModal);
    
    var btnsModal = document.createElement("div"); // div container dos botoes
    btnsModal.classList.add("btns-modal");
    btnsModal.style.display = "flex";
    btnsModal.style.flexDirection = "column";
    btnsModal.style.alignItems = "center";
    btnsModal.style.justifyContent = "center";
    modalContainer.appendChild(btnsModal);
    
    var btn1 = document.createElement("button"); // botão de FInalizar
    btn1.classList.add('roboto');
    btn1.style.marginBottom = '0.6875em';
    btn1.style.cursor = 'pointer';
    btn1.style.width = '329px';
    btn1.style.height = '52px';
    btn1.style.borderRadius = '100px';
    btn1.style.color = '#50D074';
    btn1.style.backgroundColor = '#FFFFFF';
    btn1.style.fontSize = '1.375em';
    btn1.style.fontWeight = '700';
    btn1.style.lineHeight = '26px';  
    btn1.style.letterSpacing = '0.018em';
    btn1.setAttribute('data-test', 'confirm-order-btn');
    btn1.textContent = "Tudo certo, pode pedir!";
    btn1.onclick = function() {
      enviarMensagem(dish, drink, dessert, total);
    }

    var btn2 = document.createElement("button"); // botão de cancelar
    btn2.classList.add('roboto');
    btn2.textContent = "Cancelar";
    btn2.style.cursor = 'pointer';
    btn2.style.width = '322px';
    btn2.style.height = '33px';
    btn2.style.color = '#FFFFFF';
    btn2.style.backgroundColor = '#50D074';
    btn2.style.fontWeight = '700';
    btn2.style.fontSize = '1.25em';
    btn2.style.lineHeight = '23px';
    btn2.style.letterSpacing = '0.018em';
    btn2.style.border = '0';
    btn2.setAttribute('data-test', 'cancel-order-btn');
    btn2.onclick = function() {
      fecharModal();
    }
    btnsModal.appendChild(btn1);
    btnsModal.appendChild(btn2);

    var modalBackground = document.createElement("div");
    modalBackground.classList.add("modal-background");
    modalBackground.onclick = function() { // Lógica para fechar o modal no caso de clicar fora dele
      modalBackground.style.display = "none";
      modalContainer.style.display = "none";
      document.body.style.overflow = "auto";
    }
    var container = document.querySelector(".container");
    container.appendChild(modalBackground); 
    container.appendChild(modalContainer);
    document.body.style.overflow = "hidden";
}

function adicionarPostagem() { // Brincando com adicionar postagens com imagens aleatórias, nada do projeto em si
  const novaPostagem = document.createElement('div');
  novaPostagem.classList.add('post');

  const listaImagens = ['clara.png', 'monique1.png', 'ruivo.png', 'frogao.png', 'thais.png'];
  const imagemAleatoria = listaImagens[Math.floor(Math.random() * listaImagens.length)];

  novaPostagem.style.backgroundImage = `url(./static/img/${imagemAleatoria})`;

  const row1 = document.querySelector('.postagens1');
  row1.appendChild(novaPostagem);
}


