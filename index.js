const body = document.body
const mobileMenu = document.querySelector(".mobilemenu")
const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")

hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active")
    body.classList.add("overlay")
})
close.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
    body.classList.remove("overlay")
})

//