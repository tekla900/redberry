// save input values to local storage
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('lastname');
const positions = document.getElementById('positions');
const teams = document.getElementById('teams');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');

const form = document.querySelector('form');

if(!localStorage.getItem('name')) {
  populateStorage();
} else {
  setInputs();
}

function populateStorage() {
  localStorage.setItem('name',  nameInput.value);
  localStorage.setItem('surname',  surnameInput.value);
  localStorage.setItem('position',  positions.value);
  localStorage.setItem('team',  teams.value);
  localStorage.setItem('email',  emailInput.value);
  localStorage.setItem('number',  numberInput.value);

  setInputs();
}

function setInputs() {
  let currentName = localStorage.getItem('name');
  let currentSurname = localStorage.getItem('surname');
  let currentEmail = localStorage.getItem('email');
  let currentNumber = localStorage.getItem('number');
  let currentTeam = localStorage.getItem('team');
  let currentPosition = localStorage.getItem('position');

  nameInput.value = currentName;
  surnameInput.value = currentSurname;
  emailInput.value = currentEmail;
  numberInput.value = currentNumber;
  teams.value = currentTeam;
  positions.value = currentPosition;
}

form.addEventListener('input', populateStorage)