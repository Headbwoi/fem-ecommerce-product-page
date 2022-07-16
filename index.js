//mobilemenu elements//
const mobileMenu = document.querySelector(".mobilemenu")
const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")
//cart elements//
const cartToggle = document.querySelector("[data-cartToggle]")
const cartCard = document.querySelector("[data-cartCard]")

//thumbails desktop//
const thumbnailContainer = document.querySelector("[data-thumbnails]")
const thumbnails = [...thumbnailContainer.querySelectorAll(".thumbnail")]

//slider
const mobileSliderRight = document.querySelector("[data-sliderMobileRight]")
const mobileSliderLeft = document.querySelector("[data-sliderMobileLeft]")
const imagesSlideContainer = document.querySelector("[data-imagesSlide]")
const imagesSlide = [...imagesSlideContainer.querySelectorAll("img")]

//modal elements//
const modal = document.querySelector("[data-Modal]")
const modalIconClose = document.querySelector("[data-Modal-Icon]")
const modalIconRight = document.querySelector("[data-modal-right]")
const modalIconLeft = document.querySelector("[data-modal-left]")
const modalSliderContainer = document.querySelector("[data-sliderModal]")
const modalSlides = [...modalSliderContainer.querySelectorAll("img")]

//mobile menu toggle//
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active")
})
close.addEventListener("click", () => {
  mobileMenu.classList.remove("active")
})

//cart  card toggle
cartToggle.addEventListener("click", () => {
  cartCard.classList.toggle("hidden")
})



imagesSlideContainer.style.transform = "translateX(0px)"

let activeSlideIndex = 0

const slideImageMobile = (direction) => {
  let width = imagesSlideContainer.clientWidth
  let imgLength = imagesSlide.length - 1
  if (direction === "right") {
    activeSlideIndex++
    if (activeSlideIndex > imgLength) {
      activeSlideIndex = 0
    }
    imagesSlideContainer.style.transform = `translateX(-${
      activeSlideIndex * width
    }px)`
  } else if (direction === "left") {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = imgLength
    }
    imagesSlideContainer.style.transform = `translateX(-${
      activeSlideIndex * width
    }px)`
  }
}
mobileSliderRight.addEventListener("click", () => slideImageMobile("right"))
mobileSliderLeft.addEventListener("click", () => slideImageMobile("left"))

let slideIndex = 0
//image thumnbails desktop//
const removeThumbnailActiveClass = () => {
  thumbnails.forEach(thumbnail => {
    thumbnail.classList.remove("active")
  })
}
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    removeThumbnailActiveClass()
    thumbnail.classList.add("active")
    changeSlide(slideIndex = index)
  })
})

function changeSlide(n){
  imagesSlide.forEach(img => {
    img.style.display = "none"
  })
  imagesSlide[slideIndex].style.display = "flex"
}

//desktop event listener for modal
imagesSlide.forEach((img, index) => {
  img.addEventListener("click", () => {
    if (window.screen.width > 1110) {
      openModal(index)
    }
  })
})

function openModal(index) {
  if (window.screen.width > 1110) {
    modal.classList.add("fade-in")
    modal.classList.remove("fade-out")
  }
}
function closeModal() {
    modal.classList.remove("fade-in")
    modal.classList.add("fade-out")
}

modalIconClose.addEventListener("click", closeModal)
//modal slide
activeModalIndex = 0
const slideImageModal = (direction) => {
  let width = modalSliderContainer.clientWidth
  let imgLength = modalSlides.length - 1
  if (direction === "right") {
    activeModalIndex++
    if (activeModalIndex > imgLength) {
      activeModalIndex = 0
    }
    modalSliderContainer.style.transform = `translateX(-${
      activeModalIndex * width
    }px)`
  } else if (direction === "left") {
    activeModalIndex--
    if (activeModalIndex < 0) {
      activeModalIndex = imgLength
    }
    modalSliderContainer.style.transform = `translateX(-${
      activeModalIndex * width
    }px)`
  }
}
modalIconRight.addEventListener("click", () => slideImageModal("right"))
modalIconLeft.addEventListener("click", () => slideImageModal("left"))
