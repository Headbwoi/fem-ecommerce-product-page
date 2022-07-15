const mobileMenu = document.querySelector(".mobilemenu")
const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")
const cartToggle = document.querySelector("[data-cartToggle]")



console.log(cartToggle);






hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active")
})
close.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
})

//