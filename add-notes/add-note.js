// save input values to local storage
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('lastname');
const emailInput = document.getElementById('email');
const numberInput = document.getElementById('number');
const teamsSelect = document.getElementById('teams');
const posSelect = document.getElementById('positions')

const laptopName = document.getElementById('laptop-name');
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

// saving to local storage
function populateStorage() {
  localStorage.setItem('name',  nameInput.value);
  localStorage.setItem('surname',  surnameInput.value);
  localStorage.setItem('email',  emailInput.value);
  localStorage.setItem('number',  numberInput.value);
  localStorage.setItem('laptop-name', laptopName.value);
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
  cpuCore.value = currentCpuCore;
  cpuThread.value = currentCpuThread;
  ram.value = currentRam;
  date.value = currentDate;
  price.value = currentPrice;
}

form.addEventListener('input', populateStorage);
// -------------


// FETCHING TEAM AND POSITION DATA

fetch('https://pcfy.redberryinternship.ge/api/teams', {mode: 'cors'})
.then(response => response.json())
.then(function(response){
    response.data.forEach(element => {
        let htmlRender = `
          <option data-teamId='${element.id}'>${element.name}</option>
        `;
        teamsSelect.innerHTML += htmlRender;
    });
});


fetch('https://pcfy.redberryinternship.ge/api/positions', {mode: 'cors'})
.then(response => response.json())
.then(function(response){
  html = '';
    response.data.forEach(element => {
      teamsSelect.addEventListener('change', () => {
        const index = teamsSelect.selectedIndex;
        if (index == element.team_id) {
          let htmlRender = `
            <option data-posId='${element.id}'>${element.name}</option>
          `;
          html += htmlRender;
        }
        positions.innerHTML = html;
    })
    });
});


// FETCHING LAPTOP DATA
const selectBrand = document.querySelector('#laptop-brands');
const selectCpu = document.querySelector('#cpus');

fetch('https://pcfy.redberryinternship.ge/api/brands', {mode: 'cors'})
.then(response => response.json())
.then(function(response){
    response.data.forEach(element => {
        const opt = document.createElement('option');
        opt.textContent = element.name;
        opt.setAttribute('data-brand_id', element.id);
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

// validating data
function validateName(name) {
  let pattern = /^(([\u10D0-\u10F0]+)){2,}$/;
  return pattern.test(name);
}

function validateEmail(email) {
  return email.endsWith('@redberry.ge');
}

function validateNumber(num) {
  let pattern= /^(\+?995)?\d{9}$/;
  return pattern.test(num);
}

// changing tabs

const nxtBtn = document.getElementById('next-button');
const prvBtn = document.getElementById('prv-btn');
const firstTab = document.querySelector('.tab');
const secTab = document.querySelector('.sec-tab');
const firstTitle = document.querySelector('.first-title');
const secTitle = document.querySelector('.sec-title');
const backBtn = document.querySelector('.back-button');

backBtn.addEventListener('click', () => {
  location.href = '../index.html';
})

nxtBtn.addEventListener('click', () => {

  if(!validateName(nameInput.value)) {
    nameInput.style.borderColor = 'red';
  }
  if(!validateName(surnameInput.value)) {
    surnameInput.style.borderColor = 'red';
  }
  if(!validateEmail(emailInput.value)) {
    emailInput.style.borderColor = 'red';
  }
  if(!validateNumber(numberInput.value)) {
    numberInput.style.borderColor = 'red';
  }
  if(!teamsSelect.options[teamsSelect.selectedIndex].value) {
    teamsSelect.style.borderColor = 'red';
  }
  if(!posSelect.options[posSelect.selectedIndex].value) {
    posSelect.style.borderColor = 'red';
  }

  if(validateName(nameInput.value) && validateName(surnameInput.value) && validateEmail(emailInput.value) &&  validateNumber(numberInput.value)) {
    firstTab.style.display = 'none';
    secTab.style.display = 'inherit';
    firstTitle.style.borderBottom = 'none';
    secTitle.style.borderBottom = '2px solid black';
  } 
    
})

prvBtn.addEventListener('click', () => {
    secTab.style.display = 'none';
    firstTab.style.display = 'inherit';
    
    secTitle.style.borderBottom = 'none';
    firstTitle.style.borderBottom = '2px solid black';
})
     

const page = document.querySelector('.add-success');
const imgContainer = document.querySelector('.img-container');

function popUpPage() {
  page.style.display = 'flex';
  page.style.width = '897px';
  page.style.height = '537px';
  page.style.flexDirection = 'column';
  page.style.margin = '270px auto';
  page.style.alignItems = 'center'

  form.style.display = 'none';
  document.querySelector('.title-container').style.display = 'none';
  document.querySelector('.img-container').style.display = 'none';
}

document.getElementById("toList").onclick = function () {
  location.href = "../get-all-laptops/get-laptops.html";
};

document.getElementById("main").onclick = function () {
  location.href = "../index.html";
};

// seting input file background to uploaded picture
const fileInput = document.getElementById('laptop_image');

fileInput.addEventListener('change', () => {
  var file = document.getElementById("laptop_image").files[0];
  console.log(file);
  var reader = new FileReader();
  reader.onloadend = function(){
      console.log(reader.result);
      document.getElementById('drop_zone').style.backgroundImage = `url(${reader.result})`; 
      document.getElementById('drop_zone').style.backgroundRepeat = `no-repeat`;
      document.getElementById('drop_zone').style.backgroundSize = `cover`;       
  }
  if(file){
      reader.readAsDataURL(file);
  }
  })


// POST FORM DATA

async function handleFormSubmit(event) {
	event.preventDefault();

	const url = form.action;

	try {
		const formData = new FormData(form);
    formData.append('token', 'ca421d1579a320984bc855b2200566e7');
    formData.append('team_id', Number(teamsSelect.options[teamsSelect.selectedIndex].dataset.teamid));
    formData.append('position_id', Number(posSelect.options[posSelect.selectedIndex].dataset.posid));
    formData.append('laptop_image', fileInput.files[0], "img.jpeg");
    formData.append('laptop_brand_id', Number(selectBrand.options[selectBrand.selectedIndex].dataset.brand_id));
    formData.delete('teams');
    formData.delete('positions');

    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    }).catch(error => console.log(error));

    if (!response.ok) {
      		const errorMessage = await response.text();
      		throw new Error(errorMessage);
    } else {
      popUpPage();
    }

	} catch (error) {
		console.error(error);
	}
}

form.addEventListener("submit", handleFormSubmit);