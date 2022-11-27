const token = 'ca421d1579a320984bc855b2200566e7';
const container = document.querySelector('.laptop-container ');
const backBtn = document.querySelector('.back-button');

backBtn.addEventListener('click', () => {
    location.href = '../index.html';
})

fetch(`https://pcfy.redberryinternship.ge/api/laptops?token=${token}`)
.then(response => response.json())
.then((response) => {
    let html = '';
    response.data.forEach(element => {
        let htmlRender = `
            <div class="laptop">
                <div class="titleContainer">
                    <h4>${element.user.name + ' ' + element.user.surname}</h4>
                    <h5>${element.laptop.name}</h5>
                    <a href='../laptops/laptop.html?${element.laptop.id}'>მეტის ნახვა</a>
                </div>
                <img class='laptop-image' src='https://pcfy.redberryinternship.ge/${element.laptop.image}'>
            </div>
        `;   
        html += htmlRender;
    });
    container.innerHTML = html;
})
.catch(response => console.log(response));

