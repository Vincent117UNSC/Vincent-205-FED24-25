// JavaScript Document
console.log("hi")

const horizontalScrollElements = document.querySelectorAll(".index section:first-of-type ul:first-of-type, .articles-container")

const carouselItems = document.querySelectorAll(".index section:first-of-type ul:nth-of-type(2) li")
const carouselNavButtons = document.querySelectorAll(".index section:first-of-type > div > nav > ul > li > button")
const volgendeButton = document.querySelector(".index section:first-of-type div > button:last-of-type")
const vorigeButton = document.querySelector(".index section:first-of-type div > button:nth-of-type(2)")
const afspeelPauzeerButton = document.querySelector(".index section:first-of-type div > button:first-of-type")

let startX;
let scrollLeft;
let isDown;
let hasMoved = false
let isDragging = false
let currentScrollTarget = null

let activeSlide = 0
let isTransitioning = false
let isPlaying = false

updateVideoPosters()
carouselItems[0].classList.add("active")
carouselItems[0].classList.add("slide-in-rechts")
carouselItems[1].classList.add("volgende")
carouselItems[carouselItems.length - 1].classList.add("vorige")
carouselNavButtons[0].parentElement.classList.add("active")

// Horizontaal scrollen met muis on draggen bron: https://codepen.io/Gutto/pen/GBLPyN
function mouseIsDown(e){
    currentScrollTarget = e.currentTarget
    isDown = true
    hasMoved = false
    isDragging = false
    startX = e.pageX - currentScrollTarget.offsetLeft
    scrollLeft = currentScrollTarget.scrollLeft
}
function mouseUp(){
    isDown = false
    setTimeout(() => {isDragging = false}, 10)
}
function mouseLeave(){
    isDown = false
    setTimeout(() => {isDragging = false}, 10)
}
function mouseMove(e){
    if(!isDown || !currentScrollTarget) return
    e.preventDefault()
    const x = e.pageX - currentScrollTarget.offsetLeft
    const walkX = x - startX
    if (Math.abs(walkX) > 5) {
        hasMoved = true
        isDragging = true
    }
    currentScrollTarget.scrollLeft = scrollLeft - walkX
}

function updateVideoPosters() {
    const videos = document.querySelectorAll(".index section:first-of-type ul:nth-of-type(2) li video")
    const screenWidth = window.innerWidth
    
    videos.forEach(video => {
        let newPoster
        
        if (screenWidth >= 1024) {
            newPoster = video.dataset.posterWide
        } else if (screenWidth >= 768) {
            newPoster = video.dataset.posterMedium
        } else {
            newPoster = video.dataset.posterSmall
        }

        if (video.poster !== newPoster) {
            video.poster = newPoster
        }
    })
}

function updateCarousel(direction) {
    if (isTransitioning) return
    
    isTransitioning = true
    const previousSlide = document.querySelector(".index section:first-of-type ul:nth-of-type(2) li.active")
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

horizontalScrollElements.forEach(el => {
    el.addEventListener('mousedown', mouseIsDown)
    el.addEventListener('mouseup', mouseUp)
    el.addEventListener('mouseleave', mouseLeave)
    el.addEventListener('mousemove', mouseMove)
    el.addEventListener('click', (e) => {
        if (hasMoved || isDragging) {
            e.preventDefault()
            e.stopPropagation()
        }
    }, true)
    el.addEventListener('dragstart', (e) => e.preventDefault())
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

window.addEventListener('resize', updateVideoPosters)
volgendeButton.addEventListener("click", nextSlide)
vorigeButton.addEventListener("click", prevSlide)