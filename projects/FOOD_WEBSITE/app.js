let user = document.querySelector(".fa-user")
let loginPage = document.querySelector(".login-page")
let overlay = document.querySelector(".overlay")
let closeButton = document.querySelector(".close-login-page")
let bars = document.querySelector(".fa-bars")


user.addEventListener("click", () => {
    loginPage.classList.add("active-login-page")
    overlay.classList.remove("hidden")
})

closeButton.addEventListener("click", ()=>{
    loginPage.classList.remove("active-login-page")
    overlay.classList.add("hidden")
})
