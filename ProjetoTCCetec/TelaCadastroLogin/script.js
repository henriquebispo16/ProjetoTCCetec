const coitainer = document.getElementById('container')
const registerBtn = document.
getElementById('register')
const loginBtn = document.getElementById('login')

registerBtn.addEventListener('click', () => {
    coitainer.classList.add('active')
})

loginBtn.addEventListener('click', () => {
    coitainer.classList.remove('active')
})