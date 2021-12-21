let btnAdicionarTarefa = document.querySelector("#btn-add-1");
let btnAdicionarCard = document.querySelector("#btn-add-2");
let cbxBlue = document.querySelector("#checkboxBlue");
let cbxGreen = document.querySelector("#checkboxGreen");
let cbxPink = document.querySelector("#checkboxPink");
let cbxPurple = document.querySelector("#checkboxPurple");
let cbxOrange = document.querySelector("#checkboxOrange");
let cbxWhite = document.querySelector("#checkboxWhite");
let seccaoCores = document.querySelector("#colors");
let divContainerTasks = document.getElementById('container-tasks-todo');

function loadCards() {
  return JSON.parse(localStorage.getItem("stickers") || "[]");
}

btnAdicionarCard.addEventListener('click', () => {
  divContainerTasks.appendChild(criarCardGenerico());
});

function criarCardGenerico() {
    const divElem = document.createElement("div");
    divElem.classList.add("card");
    divElem.classList.add("blue-task");

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

    divElem.appendChild(divHeader);
    divElem.appendChild(pContent);
    divElem.appendChild(divFooter); 

  return divElem;
}

btnAdicionarTarefa.addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
});

function saveCard() {
}

seccaoCores.addEventListener('click', () => {
});