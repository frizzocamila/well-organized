let btnAdicionarTarefa = document.querySelector("#btn-add-1");
let btnAdicionarCard = document.querySelector("#btn-add-2");
let cbxBlue = document.querySelector("#checkboxBlue");
let cbxGreen = document.querySelector("#checkboxGreen");
let cbxPink = document.querySelector("#checkboxPink");
let cbxPurple = document.querySelector("#checkboxPurple");
let cbxOrange = document.querySelector("#checkboxOrange");
let cbxWhite = document.querySelector("#checkboxWhite");
let seccaoCores = document.querySelector("#colors"); // fazer array com as cores
let divContainerTasks = document.getElementById('container-tasks-todo');


function loadCards() {
  //carregar do localstorage os cards
  return JSON.parse(localStorage.getItem("stickers") || "[]");
}

btnAdicionarCard.addEventListener('click', () => {
  //var cardGenerico = document.getElementByClass('card'); //array
  
  divContainerTasks.appendChild(criarCardGenerico());
  //divContainerTasks.appendChild(cardGenerico);
});

function criarCardGenerico() {
    const divElem = document.createElement("div");
    divElem.classList.add("card");
    divElem.classList.add("blue-task");
    //"função" de criar header()
    const divHeader = document.createElement("div");
    divHeader.classList.add("header-card-task");
    divHeader.innerHTML += `
      <img src="public/assets/unchecked.png" id="checkboxBlue" alt="unchecked" />
      <span>Não concluída</span>
    
    `;

    const pContent = document.createElement("p");
    pContent.classList.add("content");
    pContent.innerText = "Texto Genérico de Adição"; //remover em produção
    
    const divFooter = document.createElement("div");
    divFooter.classList.add("footer-btns");
    divFooter.innerHTML = `
      <button>
        <img src="public/assets/archive-gray-scale.png" alt="arquivar" />
      </button>
      <button>
        <img
          src="public/assets/trash-gray-scale.png"
          alt="lixeira desativada"
        />
      </button>
    `;

    //adição dos separadores principais
    divElem.appendChild(divHeader);
    divElem.appendChild(pContent);
    divElem.appendChild(divFooter); 

  return divElem;
}

btnAdicionarTarefa.addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
  /*var btn = document.createElement("BUTTON");
  var t = document.createTextNode("Yeah, man");
  btn.appendChild(t);
  document.divContainerTasks.appendChild(btn);*/  
});


function saveCard(/* receber card como parâmetro */) {
  //void function
}


seccaoCores.addEventListener('click', () => {
  //seccaoCores.style.box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);

});

/* apenas para fins de teste :D
cbxBlue.addEventListener('click', () => {
  cbxBlue.src="public/assets/checked.png";

})*/


/*  TO-DO */
//adicionar troca de imagem ao clicar