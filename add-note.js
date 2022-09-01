// save input values to local storage
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');

const laptopName = document.getElementById('laptop-name');
// const laptopBrand = document.getElementById('laptop-brands');
// const laptopCpu =  document.getElementById('cpus');
const cpuCore = document.getElementById('cpu-core');
const cpuThread = document.getElementById('cpu-thread');
const ram = document.getElementById('ram');
const date = document.getElementById('pur-date');
const price = document.getElementById('price');


const form = document.querySelector('form');

if(!localStorage.getItem('name')) {
  populateStorage();
} else {
  setInputs();
}

function populateStorage() {
  localStorage.setItem('name',  nameInput.value);
  localStorage.setItem('surname',  surnameInput.value);
  localStorage.setItem('email',  emailInput.value);
  localStorage.setItem('number',  numberInput.value);

   
  localStorage.setItem('laptop-name', laptopName.value);
//   localStorage.setItem('laptop-brand', laptopBrand.value);
//   localStorage.setItem('laptop-cpu', laptopCpu.value);
  localStorage.setItem('cpu-core', cpuCore.value);
  localStorage.setItem('cpu-thread', cpuThread.value);
  localStorage.setItem('ram', ram.value);
  localStorage.setItem('date', date.value);
  localStorage.setItem('price', price.value);

  setInputs();
}

function setInputs() {
  let currentName = localStorage.getItem('name');
  let currentSurname = localStorage.getItem('surname');
  let currentEmail = localStorage.getItem('email');
  let currentNumber = localStorage.getItem('number');

  let currentLaptopName = localStorage.getItem('laptop-name');
//   let currentLaptopBrand = localStorage.getItem('laptop-brand');
//   let currentLaptopCpu = localStorage.getItem('laptop-cpu');
  let currentCpuCore = localStorage.getItem('cpu-core');
  let currentCpuThread = localStorage.getItem('cpu-thread');
  let currentRam = localStorage.getItem('ram');
  let currentDate = localStorage.getItem('date');
  let currentPrice = localStorage.getItem('price');

  nameInput.value = currentName;
  surnameInput.value = currentSurname;
  emailInput.value = currentEmail;
  numberInput.value = currentNumber;

 laptopName.value = currentLaptopName;
//  laptopBrand.value = currentLaptopBrand;
//  laptopCpu.value = currentLaptopCpu;
 cpuCore.value = currentCpuCore;
 cpuThread.value = currentCpuThread;
 ram.value = currentRam;
 date.value = currentDate;
 price.value = currentPrice;

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


// file drop zone
function dropHandler(ev) {
  ev.preventDefault();

  if (ev.dataTransfer.items) {
    [...ev.dataTransfer.items].forEach((item, i) => {
      if (item.kind === 'file') {
        const file = item.getAsFile();
        console.log('es romelis?');
        const fileName = file.name
        console.log(`… file[${i}].name = ${file.name}`);
      }
    });
  } else {
    [...ev.dataTransfer.files].forEach((file, i) => {
      console.log(`… file[${i}].name = ${file.name}`);
    });
  }
}

function dragOverHandler(ev) {
  ev.preventDefault();
}