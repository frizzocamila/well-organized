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


