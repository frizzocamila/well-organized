let btnAdicionarTarefa = document.querySelector("#btn-add-1");
let btnAdicionarCard = document.querySelector("#btn-add-2");
/*let cbxBlue = document.querySelector("#checkboxBlue");
let cbxGreen = document.querySelector("#checkboxGreen");
let cbxPink = document.querySelector("#checkboxPink");
let cbxPurple = document.querySelector("#checkboxPurple");
let cbxOrange = document.querySelector("#checkboxOrange");
let cbxWhite = document.querySelector("#checkboxWhite");*/
let seccaoCores = document.querySelector("#colors");

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
  quadradoAzul.addEventListener('click', () => {
    //console.log("REEEEEEEEEEEEEEEEE");
    quadradoAzul.style.border = "1px solid #000000";
    quadradoAzul.style.boxShadow = "2px 2px 2px rgba(0, 0, 0, 0.25)";
    corSelecionada = "blue";
  }); 
  
  //quadradoGenerico.getElementsByClassName("color-");  
}

btnAdicionarCard.addEventListener('click', () => {

  let textoDescricao = inputDescricao.value;
  try{
    divContainerTasks.appendChild(criarCardGenerico(textoDescricao));
  } catch (error) {
    console.log("Linha 56 => script.js: " + error);
  }
  
});

function criarCardGenerico(inputTextoDescricao) {
    if(inputTextoDescricao == "") {
      alert("Insira alguma descrição na tarefa, cidadão.")
    } else {   

      const divElem = document.createElement("div");
      divElem.classList.add("card");
      var mascaraNomeCard = corSelecionada + "-task";
      if(corSelecionada != null) {
        divElem.classList.add(mascaraNomeCard);
      } else {
        //alert("Insira uma cor, cidadão!");
      }
      console.log(mascaraNomeCard);
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
  }
}


btnAdicionarTarefa.addEventListener('click', () => {
  quadradoSelecionado();
  document.querySelector('.container').classList.toggle('change');
});

function saveCard() {
}

seccaoCores.addEventListener('click', () => {
});



/*Chiqueirinho

Texto maior que o card;

*/