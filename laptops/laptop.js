const token = 'ca421d1579a320984bc855b2200566e7';

let url = window.location.href;
let id = url.substring(url.lastIndexOf('?') + 1);
const img = document.getElementById('laptop-img');
const backBtn = document.querySelector('.back-button');

backBtn.addEventListener('click', () => {
    location.href = '../get-all-laptops/get-laptops.html';
})

async function getLaptopInfo() {
    let url = `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${token}`;

    try {
        let res = await fetch(url);

        return await res.json();
    } catch(error) {
        console.log(error);
    }
}

async function getTeams() {
    let url = 'https://pcfy.redberryinternship.ge/api/teams';

    try { 
        let res = await fetch(url);

        return await res.json();
    } catch(error) {
        console.log(error);
    }
}


async function getPositions() {
    let url = 'https://pcfy.redberryinternship.ge/api/positions';

    try { 
        let res = await fetch(url);

        return await res.json();
    } catch(error) {
        console.log(error);
    }
}

async function getBrands() {
    let url = 'https://pcfy.redberryinternship.ge/api/brands' ;

    try { 
        let res = await fetch(url);

        return await res.json();
    } catch(error) {
        console.log(error);
    }
}


async function renderLaptop() {
    let laptop = await getLaptopInfo();
    // user info
    document.querySelector('.name').textContent = laptop.data.user.name + ' ' + laptop.data.user.surname;
    getTeams().then(res => document.querySelector('.team').textContent  = res.data[laptop.data.user.team_id].name);
    getPositions().then(res => document.querySelector('.position').textContent  = res.data[laptop.data.user.position_id].name);

    document.querySelector('.email').textContent = laptop.data.user.email;
    document.querySelector('.number').textContent = laptop.data.user.phone_number;
    img.src = `https://pcfy.redberryinternship.ge/${laptop.data.laptop.image}`;

    // laptop info
    document.querySelector('.laptop-name').textContent = laptop.data.laptop.name;
    getBrands().then(res => document.querySelector('.laptop-brand').textContent  = res.data[laptop.data.laptop.brand_id].name);
    document.querySelector('.ram').textContent = laptop.data.laptop.ram;
    document.querySelector('.memory-type').textContent = laptop.data.laptop.hard_drive_type;
    document.querySelector('.cpu').textContent = laptop.data.laptop.cpu.name;
    document.querySelector('.core').textContent = laptop.data.laptop.cpu.cores;
    document.querySelector('.threads').textContent = laptop.data.laptop.cpu.threads;

    document.querySelector('.state').textContent = laptop.data.laptop.state;
    document.querySelector('.price').textContent = laptop.data.laptop.price;
    document.querySelector('.date').textContent = laptop.data.laptop.purchase_date;
}


renderLaptop();
