const token = 'ca421d1579a320984bc855b2200566e7';
const container = document.querySelector('.laptop-container ');
const backBtn = document.querySelector('.back-button');

backBtn.addEventListener('click', () => {
    location.href = '../add-notes/add-note.html';
})

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
        a.textContent = 'მეტის ნახვა';
        
        a.href = `../laptops/laptop.html?${id}`;

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

