const token = 'ca421d1579a320984bc855b2200566e7';

let url = window.location.href;
let id = url.substring(url.lastIndexOf('?') + 1);
const img = document.getElementById('laptop-img');


console.log("Page location is " + id);

async function getLaptopInfo() {
    let url = `https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${token}`;

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
    document.querySelector('.team').textContent = laptop.data.user.team_id;
    document.querySelector('.position').textContent = laptop.data.user.position_id;;
    document.querySelector('.email').textContent = laptop.data.user.email;
    document.querySelector('.number').textContent = laptop.data.user.phone_number;
    img.src = `https://pcfy.redberryinternship.ge/${laptop.data.laptop.image}`;

    // laptop info
    document.querySelector('.laptop-name').textContent = laptop.data.laptop.name;
    document.querySelector('.laptop-brand').textContent = laptop.data.laptop.brand_id;
    document.querySelector('.ram').textContent = laptop.data.laptop.ram;
    document.querySelector('.memory-type').textContent = laptop.data.laptop.hard_drive_type;
    document.querySelector('.cpu').textContent = laptop.data.laptop.cpu.name;
    document.querySelector('.core').textContent = laptop.data.laptop.cpu.cores;
    document.querySelector('.threads').textContent = laptop.data.laptop.cpu.threads;

    document.querySelector('.state').textContent = laptop.data.laptop.state;
    document.querySelector('.price').textContent = laptop.data.laptop.price;
    document.querySelector('.date').textContent = laptop.data.laptop.purchase_date;
    console.log(laptop.data);


}


renderLaptop();