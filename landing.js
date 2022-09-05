const illustration = document.getElementById('illustration');

document.getElementById("add-note").onclick = function () {
    location.href = "./add-notes/add-note.html";
};

document.getElementById("see-notes").onclick = function () {
    location.href = "./get-all-laptops/get-laptops.html";
};

// changing image based on sreen width
let query = window.matchMedia("(max-width: 390px)")

function changeImg(query) {
    if (query.matches) {
        illustration.src = './images/Group.svg';
    } 
    else {
        illustration.src = './images/Group 1.svg';
    }
}

changeImg(query);
query.addListener(changeImg);
