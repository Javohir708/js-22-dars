const popupEl = document.querySelector(".popup")
const formEl = document.querySelector(".form")
const inputName = document.querySelector(".form__name")
const inputWork = document.querySelector(".form__work")
const inputGrad = document.querySelector(".form__graduation")
const wrapperEl = document.querySelector(".wrapper")
const createBtn = document.querySelector(".create__btn")

let users = JSON.parse(localStorage.getItem("data")) || [];

function addShow() {
    popupEl.style.display = 'block'
    popupEl.style.transition = '.5s'
}

function closeShow() {
    popupEl.style.display = 'none'
    popupEl.style.transition = '.5s'
}

function createCard(user) {
    const cardEl = document.createElement("div");
    cardEl.className = "card";

    cardEl.innerHTML = `
        <div class="image">
            <img src="./assets/image.png" alt="">
        </div>
        <h3>${user.name}</h3>
        <p>${user.work}</p>
        <p>${user.graduation}</p>
        <div class="icon">
            <i class="fa-brands fa-instagram" style="color: #000000;"></i>
            <i class="fa-brands fa-twitter" style="color: #000000;"></i>
            <i class="fa-brands fa-facebook-f" style="color: #000000;"></i>
        </div>
        <button class="contact__btn">Contact</button> 
    `;
    wrapperEl.appendChild(cardEl);
}

window.addEventListener("load", () => {
    users.forEach(user => {
        createCard(user);
    });
});

formEl.addEventListener("submit", (event) => {
    event.preventDefault();

    const newUser = {
        name: inputName.value,
        work: inputWork.value,
        graduation: inputGrad.value
    };

    users.push(newUser);
    localStorage.setItem("data", JSON.stringify(users));

    createCard(newUser);

    inputName.value = "";
    inputWork.value = "";
    inputGrad.value = "";
    closeShow();
});
