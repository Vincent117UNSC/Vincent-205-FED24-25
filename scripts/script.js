// JavaScript Document
console.log("hi")

// Hamburger menu
const body = document.querySelector("body")
const deNav = document.querySelector("header div nav")
const hamburgerMenuButton = document.querySelector("header div button")
const sluitMenuButton = document.querySelector("header div nav button")

const sectionsLaag2 = document.querySelectorAll("header div nav > ul > li > section")
const openButtonsLaag2 = document.querySelectorAll("header div nav > ul > li > button")
const sluitButtonsLaag2 = document.querySelectorAll("header div nav > ul > li > section > button")

const sectionsLaag3 = document.querySelectorAll("header div nav > ul > li > section > ul > li > section")
const openButtonsLaag3 = document.querySelectorAll("header div nav > ul > li > section > ul > li > button")
const sluitButtonsLaag3 = document.querySelectorAll("header div nav > ul > li > section > ul > li > section > button")

const deZoekNav = document.querySelector("header div > div nav")
const zoekenButton = document.querySelector("header div > div button")
const terugZoekenButton = document.querySelector("header div > div nav div button")

const ulTop = document.querySelector("header ul")
const listItems = ulTop.querySelectorAll("li")

const horizontalScroll = document.querySelector("main section:first-of-type ul:first-of-type")

const carouselItems = document.querySelectorAll("main section:first-of-type ul:nth-of-type(2) li")
const carouselNavButtons = document.querySelectorAll("main section:first-of-type > div > nav > ul > li > button")
const volgendeButton = document.querySelector("main section:first-of-type div > button:last-of-type")
const vorigeButton = document.querySelector("main section:first-of-type div > button:nth-of-type(2)")
const afspeelPauzeerButton = document.querySelector("main section:first-of-type div > button:first-of-type")

let currentIndex = 0
let lastScrollTop = 0

let startX;
let scrollLeft;
let isDown;
let hasMoved = false
let isDragging = false

let activeSlide = 0
let isTransitioning = false
let isPlaying = false

carouselItems[0].classList.add("active")
carouselItems[0].classList.add("slide-in-rechts")
carouselItems[1].classList.add("volgende")
carouselItems[carouselItems.length - 1].classList.add("vorige")
carouselNavButtons[0].parentElement.classList.add("active")

hamburgerMenuButton.onclick = openHambergerMenu
sluitMenuButton.onclick = sluitHamburgerMenu
zoekenButton.onclick = openZoeken
terugZoekenButton.onclick = terugVanZoeken

function updateActiveItem() {
    listItems[currentIndex].classList.remove("active")
    currentIndex = (currentIndex + 1) % listItems.length
    listItems[currentIndex].classList.add("active")
}
setInterval(updateActiveItem, 3500)

function openHambergerMenu() {
    body.classList.add("menuOpenBodyHidden")
    deNav.classList.add("menuOpen")
    deNav.style.left = "0"
}

function sluitHamburgerMenu() {
    body.classList.remove("menuOpenBodyHidden")

    deNav.classList.remove("menuOpen")
    deNav.classList.remove("openButHidden")
    deNav.style.left = "-100%"
    deNav.scrollTop = 0

    sectionsLaag2.forEach(section => section.classList.remove("laagTweeOpen", "openButHidden"))
    sectionsLaag2.forEach(section => section.style.left = "-100%")
    sectionsLaag2.forEach(section => section.scrollTop = 0)

    sectionsLaag3.forEach(section => section.classList.remove("laagDrieOpen", "openButHidden"))
    sectionsLaag3.forEach(section => section.style.left = "-100%")
    sectionsLaag3.forEach(section => section.scrollTop = 0)
}

function openZoeken() {
    deZoekNav.classList.add("zoekOpen")
    deZoekNav.style.left = "0"
    body.classList.add("menuOpenBodyHidden")
}

function terugVanZoeken() {
    deZoekNav.classList.remove("zoekOpen")
    deZoekNav.style.left = "-100%"
    body.classList.remove("menuOpenBodyHidden")
}

//findParent met wat hulp van chatGPT, erg lang gestruggled om het werkend te krijgen
function findParentIndex(child, parentArray) {
    return Array.from(parentArray).findIndex((parent) => parent.contains(child))
}

openButtonsLaag2.forEach((button, index) => {
    button.addEventListener("click", () => {
        sectionsLaag2[index].style.left = "0"
        deNav.classList.add("openButHidden")
        sectionsLaag2[index].classList.add("laagTweeOpen")
    })
})

sluitButtonsLaag2.forEach((button, index) => {
    button.addEventListener("click", () => {
        deNav.classList.remove("openButHidden")
        sectionsLaag2[index].style.left = "-100%"
        sectionsLaag2[index].classList.remove("laagTweeOpen")
        sectionsLaag2[index].scrollTop = 0
    })
})

openButtonsLaag3.forEach((button, index) => {
    button.addEventListener("click", () => {
        sectionsLaag3[index].style.left = "0"
        sectionsLaag3[index].classList.add("laagDrieOpen")

        const parentSection = sectionsLaag2[findParentIndex(sectionsLaag3[index], sectionsLaag2)]
        if (parentSection) {
            parentSection.classList.add("openButHidden")
        }
    })
})

sluitButtonsLaag3.forEach((button, index) => {
    button.addEventListener("click", () => {
        sectionsLaag3[index].style.left = "-100%"
        sectionsLaag3[index].classList.remove("laagDrieOpen")
        sectionsLaag3[index].scrollTop = 0

        const parentSection = sectionsLaag2[findParentIndex(sectionsLaag3[index], sectionsLaag2)]
        if (parentSection) {
            parentSection.classList.remove("openButHidden")
        }
    })
})

// Horizontaal scrollen met muis on draggen bron: https://codepen.io/Gutto/pen/GBLPyN
function mouseIsDown(e){
  isDown = true
  hasMoved = false
  isDragging = false
  startX = e.pageX - horizontalScroll.offsetLeft
  scrollLeft = horizontalScroll.scrollLeft
}
function mouseUp(e){
  isDown = false
  setTimeout(() => {
    isDragging = false
  }, 10)
}
function mouseLeave(e){
  isDown = false
  setTimeout(() => {
    isDragging = false
  }, 10)
}
function mouseMove(e){
  if(isDown){
    e.preventDefault()
    const x = e.pageX - horizontalScroll.offsetLeft
    const walkX = x - startX
    if (Math.abs(walkX) > 5) {
      hasMoved = true
      isDragging = true
    }
    horizontalScroll.scrollLeft = scrollLeft - walkX
  }
}

function updateCarousel(direction) {
    if (isTransitioning) return
    
    isTransitioning = true
    const previousSlide = document.querySelector("main section:first-of-type ul:nth-of-type(2) li.active")
    const previousVideo = previousSlide ? previousSlide.querySelector("video") : null

    carouselItems.forEach((item) => {
        item.classList.remove("slide-in-rechts", "slide-in-links", "volgende", "vorige")
    })

    carouselNavButtons.forEach((button) => {
        button.parentElement.classList.remove("active")
    })

    const nextIndex = (activeSlide + 1) % carouselItems.length
    const prevIndex = (activeSlide - 1 + carouselItems.length) % carouselItems.length

    carouselItems[nextIndex].classList.add("volgende")
    carouselItems[prevIndex].classList.add("vorige")

    if (direction === 'next') {
        carouselItems[activeSlide].classList.add("slide-in-rechts")
    } else if (direction === 'prev') {
        carouselItems[activeSlide].classList.add("slide-in-links")
    }
    
    carouselItems[activeSlide].classList.add("active")
    carouselNavButtons[activeSlide].parentElement.classList.add("active")
    
    const currentVideo = carouselItems[activeSlide].querySelector("video")
    if (currentVideo) {
        if (isPlaying) {
            currentVideo.play()
        } else {
            currentVideo.load()
        }
    }

    if (previousSlide) {
        setTimeout(() => {
            previousSlide.classList.remove("active")
            if (previousVideo) {
                previousVideo.load()
            }
            isTransitioning = false
        }, 450)
    } else {
        isTransitioning = false
    }
}

function nextSlide() {
    activeSlide = (activeSlide + 1) % carouselItems.length
    updateCarousel('next')
}

function prevSlide() {
    activeSlide = (activeSlide - 1 + carouselItems.length) % carouselItems.length
    updateCarousel('prev')
}

// Up-down scrollen navbar verdwijnen bron: https://stackoverflow.com/questions/31223341/detecting-scroll-direction
window.addEventListener("scroll", function(){
    let st = window.scrollY || document.documentElement.scrollTop
    let scrollDown = document.querySelector("header")
    if (st > lastScrollTop) {
        scrollDown.classList.add("nav-up")
    } else if (st < lastScrollTop) {
        scrollDown.classList.remove("nav-up")
    }
    lastScrollTop = st <= 0 ? 0 : st
}, false)

horizontalScroll.addEventListener('mousedown',e => mouseIsDown(e))
horizontalScroll.addEventListener('mouseup',e => mouseUp(e))
horizontalScroll.addEventListener('mouseleave',e=>mouseLeave(e))
horizontalScroll.addEventListener('mousemove',e=>mouseMove(e))
horizontalScroll.addEventListener('click', (e) => {
  if (hasMoved || isDragging) {
    e.preventDefault()
    e.stopPropagation()
  }
}, true)
horizontalScroll.addEventListener('dragstart', (e) => {
  e.preventDefault()
})

carouselNavButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        if (activeSlide !== index) {
            const direction = index > activeSlide ? 'next' : 'prev'
            activeSlide = index
            updateCarousel(direction)
        }
    })
})

afspeelPauzeerButton.addEventListener("click", () => { 
    const currentVideo = carouselItems[activeSlide].querySelector("video")
    if (isPlaying) {
        isPlaying = false
        afspeelPauzeerButton.classList.remove("pauzeer")
        if (currentVideo) {
            currentVideo.load()
        }
    } else {
        isPlaying = true
        afspeelPauzeerButton.classList.add("pauzeer")
        if (currentVideo) {
            currentVideo.play().catch(err => console.log("Video play error:", err))
        }
    }
})

volgendeButton.addEventListener("click", nextSlide)
vorigeButton.addEventListener("click", prevSlide)