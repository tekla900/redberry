const token = 'ca421d1579a320984bc855b2200566e7';
const container = document.querySelector('.laptop-container ');


fetch(`https://pcfy.redberryinternship.ge/api/laptops?token=${token}`)
.then(response => response.json())
.then((response) => {
    response.data.forEach(element => {
        const laptop = document.createElement('div');
        const titleContainer = document.createElement('div');
        const h4 = document.createElement('h4');
        const h5 = document.createElement('h5');
        const a = document.createElement('a');
        const name = element.user.name;
        const lastName = element.user.surname;
        const laptopName = element.laptop.name;
        const id = element.laptop.id;
        const img = document.createElement('img');
        laptop.classList.add('laptop');
        img.classList.add('laptop-image');
        titleContainer.classList.add('titleContainer');


        img.src = `https://pcfy.redberryinternship.ge/${element.laptop.image}`;
        h4.textContent = name + ' ' + lastName;
        h5.textContent = laptopName;
        a.textContent = 'see more';
        
        a.href = `laptop.html?${id}`;
        // button.href = '#';
        a.setAttribute('data-laptopid', id);
        // button.addEventListener('click' , (e) => {
        //     fetchLaptop(e.target.dataset.laptopid);
        // });

        titleContainer.appendChild(h4);
        titleContainer.appendChild(h5);
        titleContainer.appendChild(a);
        laptop.appendChild(titleContainer);
        laptop.appendChild(img);
        container.appendChild(laptop);
    });
    console.log(response);
})
.catch(response => console.log(response));

// const button = document.querySelectorAll('button');

// console.log(button);
// a.forEach(elem => () => {
//     elem.addEventListener('click', () => {
//         console.log(elem.dataset.laptopid);
//     })
// })

function es() {
    // console.log(this.dataset);
}


const button = document.querySelectorAll('.laptop');
console.log(button);


// async function fetchLaptop(id) {
//     const response = await fetch(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=${token}`);
    
//     // response.ok;     // => false
//     // response.status; // => 404
//     const text = await response.text();
//     eachLaptop(JSON.stringify(text));
//     // console.log(JSON.stringify(text));
//   }
//   fetchLaptop().then(text => {
//     text; // => 'Page not found'
//   });


// function eachLaptop(data) {
//     // const name = data.user.name + data.user.surname;
//     // const email = data.user.email;
//     // const phoneNumber = data.user.phone_number;
//     // const laptopName = data.laptop.name;
// console.log(data.length);
//     // console.log(name, email, phoneNumber, laptopName);
// }