//mobilemenu elements//
const mobileMenu = document.querySelector(".mobilemenu")
const hamburger = document.querySelector(".hamburger")
const close = document.querySelector(".close")

//mobile menu toggle//
hamburger.addEventListener("click", () => {
  mobileMenu.classList.add("active")
})
close.addEventListener("click", () => {
  mobileMenu.classList.remove("active")
})

//slider
const mobileSliderRight = document.querySelector("[data-sliderMobileRight]")
const mobileSliderLeft = document.querySelector("[data-sliderMobileLeft]")
const imagesSlideContainer = document.querySelector("[data-imagesSlide]")
const imagesSlide = imagesSlideContainer.querySelectorAll("img")

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


//thumbails desktop//
const thumbnailContainer = document.querySelector("[data-thumbnails]")
const thumbnails = [...thumbnailContainer.querySelectorAll(".thumbnail")]

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
    changeSlide(index)
  })
})

function changeSlide(n){
  imagesSlide.forEach(img => {
    img.style.display = "none"
  })
  imagesSlide[n].style.display = "flex"
}

//modal elements//
const modal = document.querySelector("[data-Modal]")
const modalIconClose = document.querySelector("[data-Modal-Icon]")
const modalIconRight = document.querySelector("[data-modal-right]")
const modalIconLeft = document.querySelector("[data-modal-left]")
const modalSliderContainer = document.querySelector("[data-sliderModal]")
const modalSlideImage = modalSliderContainer.querySelector("img")
const modalThumbnailContainer = document.querySelector("[data-modal-thumbnail]")
const modalThumbnails = [...modalThumbnailContainer.querySelectorAll(".thumbnail")]


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
    modalSlideImage.src=`images/image-product-${index + 1}.jpg`
  }
}
activeModalIndex = 0

function closeModal() {
    modal.classList.remove("fade-in")
    modal.classList.add("fade-out")
}

modalIconClose.addEventListener("click", closeModal)
//modal slide
let slideIndex = 1
const slideImageModal = (direction) => {
  if(direction === "right"){
    slideIndex++
    if(slideIndex > 4){slideIndex = 1}
  }else if(direction === "left"){
    slideIndex--
    if(slideIndex < 1){slideIndex = 4}
  }
  modalSlideImage.src=`images/image-product-${slideIndex}.jpg`
}

modalIconRight.addEventListener("click", () => slideImageModal("right"))
modalIconLeft.addEventListener("click", () => slideImageModal("left"))

//image thumnbails desktop//
const removeModalThumbnailActiveClass = () => {
  modalThumbnails.forEach(thumbnail => {
    thumbnail.classList.remove("active")
  })
}
modalThumbnails.forEach((thumb, index) => {
  thumb.addEventListener("click", () => {
    removeModalThumbnailActiveClass()
    thumb.classList.add("active")
    changeModal(index + 1)
  })
})
function changeModal(n){
  modalSlideImage.src=`images/image-product-${n}.jpg`
}

//cart elements//
const cartToggle = document.querySelector("[data-cartToggle]")
const cartCard = document.querySelector("[data-cartCard]")
const numberInCartEl = document.querySelector("[data-cart-count]")
const cartCardDeleteEl = document.querySelector("[data-item-delete]")
const cartCardItemEl = document.querySelector("[data-cart-item]")
const cartItemPrice = document.querySelector("#price")
const cartItemCount = document.querySelector(".count")
const cartItemAmount = document.querySelector(".amount")
const productCountMinusEl = document.querySelector("[data-count-minus]")
const productCountPlusEl = document.querySelector("[data-count-plus]")
const productCountEl = document.querySelector("[data-product-count]")
const emptyCartTextEl = document.querySelector(".empty")
const addToCartEl = document.querySelector("[data-add-to-cart]")
const itemCheckoutEl = document.querySelector("[data-item-checkout]")

//cart  card toggle
cartToggle.addEventListener("click", () => {
  cartCard.classList.toggle("hidden")
})

let productCount = 0

productCountMinusEl.addEventListener("click", () => {
  if(productCount < 0)return
  productCountEl.innerText = productCount--
})
productCountPlusEl.addEventListener("click", () => {
  productCountEl.innerText = productCount++
})

numberInCartEl.innerText = productCount

const calculatePrice = () => {
  cartItemCount.innerText = productCount
  let calc = Number(cartItemCount.innerText) * 125
  cartItemAmount.innerText = `$${calc}.00`
}

addToCartEl.addEventListener("click", () => {
  if (productCount == 0) {
    emptyCartTextEl.classList.remove("hidden")

  }
  calculatePrice()
})
