const mobileMenu = document.querySelector(".mobilemenu")
const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")
const cartToggle = document.querySelector("[data-cartToggle]")
const cartCard = document.querySelector("[data-cartCard]")


//cart  card toggle
cartToggle.addEventListener("click", () => {
    cartCard.classList.toggle("hidden")
})

//slider
const mobileSliderRight = document.querySelector("[data-sliderMobileRight]")
const mobileSliderLeft = document.querySelector("[data-sliderMobileLeft]")
const imagesSlideContainer = document.querySelector("[data-imagesSlide]")
const imagesSlide = [...(imagesSlideContainer.querySelectorAll("img"))]

imagesSlideContainer.style.transform = "translateX(0px)"

let activeSlideIndex = 0



const slideImage = (direction) => {
    let width = imagesSlideContainer.clientWidth
    if(direction === "right"){
        activeSlideIndex++
        if(activeSlideIndex > imagesSlide.length - 1) {
            activeSlideIndex = 0
        }
        imagesSlideContainer.style.transform = `translateX(-${activeSlideIndex * width}px)`
    }else if(direction === "left"){
        activeSlideIndex--
        if(activeSlideIndex < 0){
            activeSlideIndex = 0
        }
        imagesSlideContainer.style.transform = `translateX(${activeSlideIndex * width}px)`
    }
}
mobileSliderRight.addEventListener("click", () => slideImage("right"))
mobileSliderLeft.addEventListener("click", () => slideImage("left"))






hamburger.addEventListener("click", () => {
    mobileMenu.classList.add("active")
})
close.addEventListener("click", () => {
    mobileMenu.classList.remove("active")
})

//