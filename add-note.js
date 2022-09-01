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


// fetching team and position data
const selectTeam = document.querySelector('#teams');
const selectPos = document.querySelector('#positions');


fetch('https://pcfy.redberryinternship.ge/api/teams', {mode: 'cors'})
        .then(response => response.json())
        .then(function(response){
            response.data.forEach(element => {
                const opt = document.createElement('option');
                opt.textContent = element.name;
                selectTeam.appendChild(opt)
            });
        });


        fetch('https://pcfy.redberryinternship.ge/api/positions', {mode: 'cors'})
        .then(response => response.json())
        .then(function(response){
            response.data.forEach(element => {
              selectTeam.addEventListener('change', () => {
                const index = selectTeam.selectedIndex;
                if (index == element.team_id) {
                    const opt = document.createElement('option');
                    opt.textContent = element.name;
                    positions.appendChild(opt)
                }
            })
            });
        });