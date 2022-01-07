let btnAdicionarTarefa = document.querySelector("#btn-add-1");
let btnAdicionarCard = document.querySelector("#btn-add-2");
/*let cbxBlue = document.querySelector("#checkboxBlue");
let cbxGreen = document.querySelector("#checkboxGreen");
let cbxPink = document.querySelector("#checkboxPink");
let cbxPurple = document.querySelector("#checkboxPurple");
let cbxOrange = document.querySelector("#checkboxOrange");
let cbxWhite = document.querySelector("#checkboxWhite");*/
let seccaoCores = document.querySelector("#colors");

let divAdicionarTarefa = document.querySelector(".add-tasks");
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



let divContainerTasks = document.getElementById('container-tasks-todo');

function loadCards() {
  return JSON.parse(localStorage.getItem("stickers") || "[]");
}

/*quadradoGenerico.addEventListener('click', () => {
  //console.log("Deu sinal de vida");
});*/




function quadradoSelecionado() {

  //simplificar funções abaixo
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
  
  //quadradoGenerico.getElementsByClassName("color-");  
}

function tratarTexto(texto) {
  let textoTratado = texto;
  var contador = 0;
  var contadorTamanho = 0;
  var flagPalvraGrande = 0;
  
  for(var i = 0; i < textoTratado.lenght; i++){           //16
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
  //console.log(contadorTamanho);
  return textoTratado;
}

function limparQuadrado(corAtual) {
  corAtual.style.boxShadow = "unset";
  corAtual.style.border = "1px solid #646464";
}

function pseudoDicionarioQuadrado() {

  let cores = new Map();
  cores.set("blue", quadradoAzul);
  cores.set("green", quadradoVerde);
  cores.set("pink", quadradoRosa);
  cores.set("purple", quadradoRoxo);
  cores.set("yellow", quadradoAmarelo);
  cores.set("orange", quadradoLaranja);
  cores.set("white", quadradoBranco);

  for (let [key, value] of cores) {
    if(key != corSelecionada) limparQuadrado(value);
    console.log("cor: " + key + " value: " + value);
  }

//quadradoAzul, quadradoVerde, quadradoRosa, quadradoRoxo, quadradoAmarelo, quadradoLaranja, quadradoBranco
  //console.log(cores.get(quadradoAzul));
  
  


  /*quadradoAzul.style.boxShadow = "unset";
  quadradoAzul.style.border = "1px solid #646464";
  quadradoVerde.style.boxShadow = "unset";
  quadradoVerde.style.border = "1px solid #646464";
  quadradoRosa.style.boxShadow = "unset";
  quadradoRosa.style.border = "1px solid #646464";
  quadradoRoxo.style.boxShadow = "unset";
  quadradoRoxo.style.border = "1px solid #646464";
  quadradoAmarelo.style.boxShadow = "unset";
  quadradoAmarelo.style.border = "1px solid #646464";
  quadradoLaranja.style.boxShadow = "unset";
  quadradoLaranja.style.border = "1px solid #646464";
  quadradoBranco.style.boxShadow = "unset";
  quadradoBranco.style.border = "1px solid #646464";*/

}

btnAdicionarCard.addEventListener('click', () => {
  
  let textoDescricao = inputDescricao.value;
  
  //console.log(textoTratado[2]);
  try{
    divContainerTasks.appendChild(criarCardGenerico(tratarTexto(textoDescricao)));
    inputDescricao.value = ""; //limpar texto
    corSelecionada = null;
    //formularioTarefas.style.display = "none";
    //divAdicionarTarefa.style.display = "inherit"
    
  } catch (error) {
    console.log("Linha 56 => script.js: " + error);
  }
  
});

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
          
            <div class="header-card-task">
              <img src="public/assets/unchecked.png" id="checkboxBlue" alt="unchecked" />
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
        return divElem;
      } else {
        alert("Insira uma cor, cidadão!");
        return 0;
      }
      

    
  }
}


btnAdicionarTarefa.addEventListener('click', () => {
  //divAdicionarTarefa.style.display = "flex";
  quadradoSelecionado();
  document.querySelector('.container').classList.toggle('change');
 
});

function saveCard() {
}

seccaoCores.addEventListener('click', () => {
});



/*Chiqueirinho

Texto maior que o card;
Só o texto funfa kkkkkkk (definir padrão?)
Local storage
Remover animação de shadow do quadradado
*/