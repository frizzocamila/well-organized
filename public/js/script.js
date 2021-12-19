let btnAdicionarTarefa = document.querySelector("#btn-add-1");
let btnAdicionarCard = document.querySelector("#btn-add-2");
let cbxBlue = document.querySelector("#checkboxBlue");
let cbxGreen = document.querySelector("#checkboxGreen");
let cbxPink = document.querySelector("#checkboxPink");
let cbxPurple = document.querySelector("#checkboxPurple");
let cbxOrange = document.querySelector("#checkboxOrange");
let cbxWhite = document.querySelector("#checkboxWhite");

btnAdicionarTarefa.addEventListener('click', () => {
  document.querySelector('.container').classList.toggle('change');

});

/* apenas para fins de teste :D
cbxBlue.addEventListener('click', () => {
  cbxBlue.src="public/assets/checked.png";

})*/


