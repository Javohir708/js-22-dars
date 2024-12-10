const popupEl = document.querySelector(".popup")
const formEl = document.querySelector(".form")
const inputName = document.querySelector(".form__name")
const inputWork = document.querySelector(".form__work")
const inputGrad = document.querySelector(".form__graduation")
const wrapperEl = document.querySelector(".wrapper")
const createBtn = document.querySelector(".create__btn")


function addShow() {
    popupEl.style.display = 'block'
    popupEl.style.transition = '.5s'
}

function closeShow() {
    popupEl.style.display = 'none'
    popupEl.style.transition = '.5s'
}

formEl.addEventListener ("submit", (event) => {
    event.preventDefault()
    
    const cardEl = document.createElement('div')
    cardEl.className = 'card'

    cardEl.innerHTML = `
       <div class="image">
            <img src="./assets/image.png" alt="">
        </div>
           <h3>${inputName.value}</h3>
           <p>${inputWork.value}</p>
           <p>${inputGrad.value}</p>
           <div class="icon">
                <i class="fa-brands fa-instagram" style="color: #000000;"></i>
                <i class="fa-brands fa-twitter" style="color: #000000;"></i>
                <i class="fa-brands fa-facebook-f" style="color: #000000;"></i>
            </div>
            <button class="contact__btn">Contact</button> 
    `

    wrapperEl.appendChild(cardEl)
    inputName.value = ''
    inputWork.value = ''
    inputGrad.value = ''
})