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

    divElem.innerHTML += `
      <div class="card blue-task">
        <div class="header-card-task">
          <img src="public/assets/unchecked.png" id="checkboxBlue" alt="unchecked" />
          <span>Não concluída</span>
        </div>
        <p class="content">Estudar Html</p>
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

  return divElem;
}

btnAdicionarTarefa.addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');
});

function saveCard() {
}

seccaoCores.addEventListener('click', () => {
});