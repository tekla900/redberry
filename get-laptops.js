const token = 'ca421d1579a320984bc855b2200566e7';
const container = document.querySelector('.laptop-container ');

fetch(`https://pcfy.redberryinternship.ge/api/laptops?token=${token}`)
.then(response => response.json())
.then((response) => {
    response.data.forEach(element => {
        const laptop = document.createElement('div');
        laptop.classList.add('laptop');
        const name = element.user.name;
        const lastName = element.user.surname;
        const laptopName = element.laptop.name;
        const image = `https://pcfy.redberryinternship.ge/${element.laptop.image}`;
        laptop.textContent = name;
        console.log(image);
        container.appendChild(laptop);
    });
    console.log(response);
})
// const selectTeam = document.querySelector('#teams');
// const selectPos = document.querySelector('#positions');


// fetch('https://pcfy.redberryinternship.ge/api/teams', {mode: 'cors'})
// .then(response => response.json())
// .then(function(response){
//     response.data.forEach(element => {
//         const opt = document.createElement('option');
//         opt.textContent = element.name;
//         opt.setAttribute('data-teamId', element.id);
//         selectTeam.appendChild(opt)
//     });
// });
