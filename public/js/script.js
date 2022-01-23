let btnAdicionarTarefa = document.querySelector("#btn-add-1");
let btnAdicionarCard = document.querySelector("#btn-add-2");

let seccaoCores = document.querySelector("#colors");
let containerPrincipal = document.querySelector(".container");
let formularioTarefas = document.querySelector(".form-add-tasks");

/* quadrados ao adicionar tarefas */
let quadradoAzul = document.querySelector("#scb");
let quadradoVerde = document.querySelector("#scg");
let quadradoRosa = document.querySelector("#scpnk");
let quadradoRoxo = document.querySelector("#scpl");
let quadradoAmarelo = document.querySelector("#scy");
let quadradoLaranja = document.querySelector("#sco");
let quadradoBranco = document.querySelector("#scw");

//criar função para sinalizar a criação de card
var corSelecionada = null;

let inputDescricao = document.querySelector("#desc");
let divContainerTasks = document.getElementById("container-tasks-todo");
let divsCabecalhoCard = document.getElementsByTagName("header-card-task");

carregarCards();

function carregarCards() {
  //matriz nx2, em que o i = identificação card e j = conteúdo card
  let cardsLocalStorage = Object.entries(localStorage).sort();
  
  
  //console.log(cardsLocalStorage)
  for (var i = 0; i < cardsLocalStorage.length; i++) {
    
    var corArmazenadaCard = cardsLocalStorage[i][0].split('_', 1);

    var conteudoArmazenadoCard = cardsLocalStorage[i][1];
    var tamanhoTotalCard = cardsLocalStorage[i][1].length;
    var inicioTextoCard = cardsLocalStorage[i][1].search("<p class=") + 21;
    var fimTextoCard = cardsLocalStorage[i][1].search("p>") - 2; 
    var textoCortado = conteudoArmazenadoCard.slice((inicioTextoCard - tamanhoTotalCard), (fimTextoCard - tamanhoTotalCard));
    
    var inicioId = conteudoArmazenadoCard.search("id=");
    var idCortado = conteudoArmazenadoCard.slice(inicioId - tamanhoTotalCard).split(" ")[0];
    idCortado = idCortado.slice(5 - idCortado.length, -2);
    //console.log(idCortado);
    

    const divElemCarregada = document.createElement("div");
    divElemCarregada.innerHTML += `
        <div class="card ${corArmazenadaCard}-task">
        <div class="header-card-task" id="${idCortado}" onClick="cabecalhoSelecionado(this.id)">
          <img src="public/assets/unchecked.png" id="checkbox${corArmazenadaCard}" alt="unchecked" />
          <span>Não concluída</span>
        </div>
        <p class="content">${textoCortado}</p>
        <div class="footer-btns">
          <button>
            <img src="public/assets/archive-gray-scale.png" alt="arquivar" />
          </button>
          <button>
            <img
              src="public/assets/trash-gray-scale.png"
              alt="lixeira desativada"
            />
          </button>
        </div>
      </div>
    `;
    divContainerTasks.appendChild(divElemCarregada);

  }
}



function cabecalhoSelecionado(idCabecalho) {
  //console.log("==>" + idCabecalho + "<==");
  
  //ver o que está acontecendo com id
  let cabecalhoCard = document.querySelector("#" + idCabecalho);
  console.log(idCabecalho);
  
  cabecalhoCard.classList.remove("header-card-task");
  cabecalhoCard.classList.add("header-card-task-done");
  cabecalhoCard.getElementsByTagName("img")[0].src = "public/assets/checked.png";
  cabecalhoCard.parentNode.getElementsByTagName("p")[0].style.textDecoration = "line-through";
  cabecalhoCard.getElementsByTagName("span")[0].innerText = "Concluída";

  editarCard(idCabecalho);
}

function quadradoSelecionado() { 
  quadradoAzul.addEventListener('click', () => {
    quadradoAzul.style.border = "1px solid #000000";
    quadradoAzul.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.25)";
    corSelecionada = "blue";
    pseudoDicionarioQuadrado();
  }); 

  quadradoVerde.addEventListener('click', () => {
    quadradoVerde.style.border = "1px solid #000000";
    quadradoVerde.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.25)";
    corSelecionada = "green";
    pseudoDicionarioQuadrado();
  }); 

  quadradoRosa.addEventListener('click', () => {
    quadradoRosa.style.border = "1px solid #000000";
    quadradoRosa.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.25)";
    corSelecionada = "pink";
    pseudoDicionarioQuadrado();
  }); 

  quadradoRoxo.addEventListener('click', () => {
    quadradoRoxo.style.border = "1px solid #000000";
    quadradoRoxo.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.25)";
    corSelecionada = "purple";
    pseudoDicionarioQuadrado();
  }); 

  quadradoAmarelo.addEventListener('click', () => {
    quadradoAmarelo.style.border = "1px solid #000000";
    quadradoAmarelo.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.25)";
    corSelecionada = "yellow";
    pseudoDicionarioQuadrado();
  });

  quadradoLaranja.addEventListener('click', () => {
    quadradoLaranja.style.border = "1px solid #000000";
    quadradoLaranja.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.25)";
    corSelecionada = "orange";
    pseudoDicionarioQuadrado();
  }); 

  quadradoBranco.addEventListener('click', () => {
    quadradoBranco.style.border = "1px solid #000000";
    quadradoBranco.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.25)";
    corSelecionada = "white";
    pseudoDicionarioQuadrado();
  }); 
}

function tratarTexto(texto) {
  let textoTratado = texto;
  var contador = 0;
  var contadorTamanho = 0;
  var flagPalvraGrande = 0;
  
  for(var i = 0; i < textoTratado.lenght; i++){
    if(textoTratado[i] == ' ' && contador == 3) {
      textoTratado[i].concat("\n");
      contador = 0;
      flagPalvraGrande += 1;
    }
    if(textoTratado.lenght > 16) {
      textoTratado += "\n";

    }
    contador++;
    contadorTamanho++;
  }
  return textoTratado;
}

function limparQuadrado(corAtual) {
  corAtual.style.boxShadow = "unset";
  corAtual.style.border = "1px solid #646464";
}

function pseudoDicionarioQuadrado(limparCorAtual) {

  let cores = new Map();
  cores.set("blue", quadradoAzul);
  cores.set("green", quadradoVerde);
  cores.set("pink", quadradoRosa);
  cores.set("purple", quadradoRoxo);
  cores.set("yellow", quadradoAmarelo);
  cores.set("orange", quadradoLaranja);
  cores.set("white", quadradoBranco);

  if(limparCorAtual == true) {
    for (let [key, value] of cores) {
      if(key == corSelecionada) limparQuadrado(value);   
    }
  } else {
    for (let [key, value] of cores) {
      if(key != corSelecionada) limparQuadrado(value);   
    }
  }
}

btnAdicionarCard.addEventListener('click', () => {
  
  let textoDescricao = inputDescricao.value;

  try{
    //armazenar o card genérico, após modificações e persistir no localStorage
    divContainerTasks.appendChild(criarCardGenerico(tratarTexto(textoDescricao)));

    inputDescricao.value = ""; //limpar texto
    pseudoDicionarioQuadrado(true);
    corSelecionada = null;    
    containerPrincipal.classList.remove("change");
    //carregarCards();
  } catch (error) {
    console.log("Linha 56 => script.js: " + error);
  }
  
});

function gerarNumeroAleatorio(entropia) { //estatisticamente é bem improvável que sejam gerados números iguais, por conta da quantidade de casas decimais
  let numeroPseudoAleatorio = (entropia * (Math.random() * (divsCabecalhoCard.length + 1))) * 100;
  numeroPseudoAleatorio = Math.floor(numeroPseudoAleatorio);
  return numeroPseudoAleatorio;
}

function criarCardGenerico(inputTextoDescricao) {
    if(inputTextoDescricao == "") {
      alert("Insira alguma descrição na tarefa, cidadão.")
    } else {   
      if(corSelecionada != null) {
        const divElem = document.createElement("div");
        divElem.classList.add("card");
        var mascaraNomeCard = corSelecionada + "-task";
     
        divElem.classList.add(mascaraNomeCard);
        divElem.innerHTML += `
          
            <div class="header-card-task" id="${corSelecionada}_hct${gerarNumeroAleatorio(Math.random())}" onClick="cabecalhoSelecionado(this.id)">
              <img src="public/assets/unchecked.png" alt="unchecked" />
              <span>Não concluída</span>
            </div>
            <p class="content">${inputTextoDescricao}</p>
            <div class="footer-btns">
              <button>
                <img src="public/assets/archive-gray-scale.png" alt="arquivar" />
              </button>
              <button>
                <img
                  src="public/assets/trash-gray-scale.png"
                  alt="lixeira desativada"
                />
              </button>
            </div>
        `;
        salvarCard(divElem.innerHTML, corSelecionada);
        return divElem;
      } else {
        alert("Insira uma cor, cidadão!");
        return 0;
      }    
  }
}

btnAdicionarTarefa.addEventListener('click', () => {
  quadradoSelecionado();
  document.querySelector('.container').classList.toggle('change'); 
});

function editarCard(idCard) {

 /*  var inicioId = .search("id=");
  var idCortado = .slice(inicioId - tamanhoTotalCard).split(" ")[0];
  idCortado = idCortado.slice(5 - idCortado.length, -2); */

  for(var i = 0; i < localStorage.length; i++){
    var tempCard = window.localStorage.getItem(localStorage.key(i));
    var tamanhoTotalCard = tempCard.length;
    var inicioId = tempCard.search("id=");
    var idCortado = tempCard.slice(inicioId - tamanhoTotalCard).split(" ")[0];
    idCortado = idCortado.slice(5 - idCortado.length, -2);
    console.log(idCortado);
  }
  
  //return window.localStorage.key();
  //window.localStorage.setItem(corCard + "_card" + idCard);
}

function salvarCard(card, corCard) { // colocar o JSON.stringfy...
  console.log("====>" + JSON.stringify(card));
  window.localStorage.setItem(corCard + "_card" + gerarNumeroAleatorio(Math.random()), JSON.stringify(card));
}

seccaoCores.addEventListener('click', () => {
});



/*Chiqueirinho

Texto maior que o card;
Só o texto funfa kkkkkkk (definir padrão?)
Local storage
Remover animação de shadow do quadradado
*/