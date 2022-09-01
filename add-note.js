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


// fetching laptop data
const selectBrand = document.querySelector('#laptop-brands');
const selectCpu = document.querySelector('#cpus');

fetch('https://pcfy.redberryinternship.ge/api/brands', {mode: 'cors'})
.then(response => response.json())
.then(function(response){
    response.data.forEach(element => {
        const opt = document.createElement('option');
        opt.textContent = element.name;
        selectBrand.appendChild(opt)
    });
});

fetch('https://pcfy.redberryinternship.ge/api/cpus', {mode: 'cors'})
.then(response => response.json())
.then(function(response){
    response.data.forEach(element => {
        const opt = document.createElement('option');
        opt.textContent = element.name;
        selectCpu.appendChild(opt)
    });
});


// changing tabs

const nxtBtn = document.getElementById('next-button');
const prvBtn = document.getElementById('prv-btn');
const firstTab = document.querySelector('.tab');
const secTab = document.querySelector('.sec-tab');
const firstTitle = document.querySelector('.first-title');
const secTitle = document.querySelector('.sec-title');



nxtBtn.addEventListener('click', () => {
    firstTab.style.display = 'none';
    secTab.style.display = 'inherit';
    
    firstTitle.style.borderBottom = 'none';
    secTitle.style.borderBottom = '2px solid black';
})

prvBtn.addEventListener('click', () => {
    secTab.style.display = 'none';
    firstTab.style.display = 'inherit';
    
    secTitle.style.borderBottom = 'none';
    firstTitle.style.borderBottom = '2px solid black';
})

