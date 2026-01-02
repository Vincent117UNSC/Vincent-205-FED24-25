// JavaScript Document
console.log("hi")

const horizontalScrollElements = document.querySelectorAll(`
    .index section:first-of-type ul:first-of-type, 
    .articles-container,
    .index section:nth-of-type(6) ul
`)

const carouselItems = document.querySelectorAll(".index section:first-of-type ul:nth-of-type(2) li")
const carouselNavButtons = document.querySelectorAll(".index section:first-of-type > div > nav > ul > li > button")
const carouselVolgendeButton = document.querySelector(".index section:first-of-type div > button:last-of-type")
const carouselVorigeButton = document.querySelector(".index section:first-of-type div > button:nth-of-type(2)")
const afspeelPauzeerButton = document.querySelector(".index section:first-of-type div > button:first-of-type")

const carousel2Nav = document.querySelector(".index section:nth-of-type(3) > nav > ul")
const carousel2NavItems = document.querySelectorAll(".index section:nth-of-type(3) > nav > ul > li")
const carousel2Items = document.querySelectorAll(".index section:nth-of-type(3) > ul li")
const carousel2NavButtons = document.querySelectorAll(".index section:nth-of-type(3) > nav > ul > li > button")
const carousel2VolgendeButton = document.querySelector(".index section:nth-of-type(3) > nav > button:last-of-type")
const carousel2VorigeButton = document.querySelector(".index section:nth-of-type(3) > nav > button:first-of-type")

//Basis komt van codepen bron: https://codepen.io/supah/pen/VwegJwV, de rest is voornamelijk gedaan met hulp van copilot
//Dit geld voor de infinite carousel scroll, dragging en het centreren van het actieve item in de navigatiebalk.
const lerp = (v0, v1, t) => {
    return v0 * (1 - t) + v1 * t
}
const disposeCarousel2Nav = (scroll) => {
    carousel2NavItems.forEach((li, i) => {
        const baseX = carousel2ItemPositions[i] + scroll
        
        let positions = [baseX]
        
        positions.push(baseX - carousel2WrapWidth)
        positions.push(baseX + carousel2WrapWidth)
        
        const viewCenter = carousel2NavWidth / 2
        let bestPosition = positions[0]
        let minDistance = Math.abs(positions[0] - viewCenter)
        
        positions.forEach(pos => {
            const distance = Math.abs(pos - viewCenter)
            if (distance < minDistance) {
                minDistance = distance
                bestPosition = pos
            }
        })
        
        li.style.transform = `translateX(${bestPosition}px) translateY(-50%)`
    })
}
const handleNavTouchStart = (e) => {
    navTouchStart = e.clientX || e.touches[0].clientX
    navIsDragging = true
    carousel2Nav.classList.add('is-dragging')
}
const handleNavTouchMove = (e) => {
    if (!navIsDragging) return
    e.preventDefault()
    navTouchX = e.clientX || e.touches[0].clientX
    carousel2ScrollY += (navTouchX - navTouchStart) * 1
    navTouchStart = navTouchX
}
const handleNavTouchEnd = () => {
    navIsDragging = false
    carousel2Nav.classList.remove('is-dragging')

    setTimeout(() => {
        centerActiveNavItem()
    }, 100)
}
const renderCarousel2Nav = () => {
    carousel2Y = lerp(carousel2Y, carousel2ScrollY, 0.1)
    disposeCarousel2Nav(carousel2Y)
}
const render = () => {
    requestAnimationFrame(render)
    renderCarousel2Nav()
}

let startX
let scrollLeft
let isDown
let hasMoved = false
let isDragging = false
let currentScrollTarget = null

let activeSlide = 0
let activeSlide2 = 0
let carousel2ScrollY = 0
let carousel2Y = 0
let carousel2NavWidth = 0
let carousel2ItemWidth = 0
let carousel2WrapWidth = 0

let isTransitioning = false
let isPlaying = false

let navTouchStart = 0
let navTouchX = 0
let navIsDragging = false
let carousel2ItemWidths = []
let carousel2ItemPositions = []

updateVideoPosters()
carouselItems[0].classList.add("active")
carouselItems[0].classList.add("slide-in-rechts")
carouselItems[1].classList.add("volgende")
carouselItems[carouselItems.length - 1].classList.add("vorige")
carouselNavButtons[0].parentElement.classList.add("active")

render()
initCarousel2Nav()
centerActiveNavItem()
updateCarousel2NavActive()
carousel2Items[0].classList.add("active")
carousel2Items[0].classList.add("slide-in-rechts")
carousel2Items[1].classList.add("volgende")
carousel2Items[carousel2Items.length - 1].classList.add("vorige")

function isDesktopWide() {
    return window.innerWidth >= 1024
}

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
    if (currentScrollTarget) {
        currentScrollTarget.classList.remove('scrolling')
        const currentScroll = currentScrollTarget.scrollLeft
        currentScrollTarget.scrollLeft = currentScroll + 1
        currentScrollTarget.scrollLeft = currentScroll
    }
    setTimeout(() => {isDragging = false}, 10)
}
function mouseLeave(){
    isDown = false
    if (currentScrollTarget) {
        currentScrollTarget.classList.remove('scrolling')
        const currentScroll = currentScrollTarget.scrollLeft
        currentScrollTarget.scrollLeft = currentScroll + 1
        currentScrollTarget.scrollLeft = currentScroll
    }
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
        currentScrollTarget.classList.add('scrolling')
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

function updateCarousel(items, navButtons, activeIndex, direction, hasVideo = false) {
    if (isTransitioning) return
    
    isTransitioning = true
    const previousSlide = Array.from(items).find(item => item.classList.contains("active"))
    const previousVideo = hasVideo && previousSlide ? previousSlide.querySelector("video") : null

    items.forEach((item) => {
        item.classList.remove("slide-in-rechts", "slide-in-links", "volgende", "vorige")
    })

    if (navButtons) {
        navButtons.forEach((button) => {
            button.parentElement.classList.remove("active")
        })
    }

    const nextIndex = (activeIndex + 1) % items.length
    const prevIndex = (activeIndex - 1 + items.length) % items.length

    items[nextIndex].classList.add("volgende")
    items[prevIndex].classList.add("vorige")

    if (direction === 'next') {
        items[activeIndex].classList.add("slide-in-rechts")
    } else if (direction === 'prev') {
        items[activeIndex].classList.add("slide-in-links")
    }
    
    items[activeIndex].classList.add("active")
    if (navButtons) {
        navButtons[activeIndex].parentElement.classList.add("active")
    }
    
   if (hasVideo) {
        const currentVideo = items[activeIndex].querySelector("video")
        if (currentVideo) {
            if (isPlaying) {
                currentVideo.play()
            } else {
                currentVideo.load()
            }
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
    updateCarousel(carouselItems, carouselNavButtons, activeSlide, 'next', true)
}

function prevSlide() {
    activeSlide = (activeSlide - 1 + carouselItems.length) % carouselItems.length
    updateCarousel(carouselItems, carouselNavButtons, activeSlide, 'prev', true)
}

function nextSlide2() {
    const prevIndex = activeSlide2
    activeSlide2 = (activeSlide2 + 1) % carousel2Items.length
    
    updateCarousel2NavActive()
    
    if (prevIndex === carousel2Items.length - 1 && activeSlide2 === 0) {
        const fakePosition = carousel2WrapWidth
        const fakeItemCenter = fakePosition + (carousel2ItemWidths[0] / 2)
        carousel2ScrollY = (carousel2NavWidth / 2) - fakeItemCenter
        
        setTimeout(() => {
            const realPosition = carousel2ItemPositions[0]
            const realItemCenter = realPosition + (carousel2ItemWidths[0] / 2)
            const targetScroll = (carousel2NavWidth / 2) - realItemCenter
            
            carousel2ScrollY = targetScroll
            carousel2Y = targetScroll
        }, 500)
    } else {
        centerActiveNavItem()
    }
    
    updateCarousel(carousel2Items, null, activeSlide2, 'next', false)
}

function prevSlide2() {
    const prevIndex = activeSlide2
    activeSlide2 = (activeSlide2 - 1 + carousel2Items.length) % carousel2Items.length
    
    updateCarousel2NavActive()
    
    if (prevIndex === 0 && activeSlide2 === carousel2Items.length - 1) {
        const fakePosition = -carousel2ItemWidths[carousel2Items.length - 1]
        const fakeItemCenter = fakePosition + (carousel2ItemWidths[carousel2Items.length - 1] / 2)
        carousel2ScrollY = (carousel2NavWidth / 2) - fakeItemCenter
        
        setTimeout(() => {
            const realPosition = carousel2ItemPositions[carousel2Items.length - 1]
            const realItemCenter = realPosition + (carousel2ItemWidths[carousel2Items.length - 1] / 2)
            const targetScroll = (carousel2NavWidth / 2) - realItemCenter
            
            carousel2ScrollY = targetScroll
            carousel2Y = targetScroll
        }, 500)
    } else {
        centerActiveNavItem()
    }
    
    updateCarousel(carousel2Items, null, activeSlide2, 'prev', false)
}

function initCarousel2Nav() {
    if (carousel2NavItems.length === 0) return
    
    carousel2NavWidth = carousel2Nav.clientWidth
    carousel2ItemWidths = []
    carousel2ItemPositions = []
    carousel2WrapWidth = 0
    
    carousel2NavItems.forEach((item, i) => {
        const itemRect = item.getBoundingClientRect()
        carousel2ItemWidths.push(itemRect.width)
        carousel2ItemPositions.push(carousel2WrapWidth)
        carousel2WrapWidth += itemRect.width
        if (i < carousel2NavItems.length - 1) {
            carousel2WrapWidth
        }
    })
}

function centerActiveNavItem() {
    const targetPosition = carousel2ItemPositions[activeSlide2]
    const activeItemCenter = targetPosition + (carousel2ItemWidths[activeSlide2] / 2)
    carousel2ScrollY = (carousel2NavWidth / 2) - activeItemCenter
}

function updateCarousel2NavActive() {
    carousel2NavItems.forEach((li, index) => {
        if (index === activeSlide2) {
            li.classList.add('active')
        } else {
            li.classList.remove('active')
        }
    })
}

function moveProductCardIntro() {
    const sections = document.querySelectorAll(".index section:nth-of-type(2), .index section:nth-of-type(5)")
    const instances = []

    sections.forEach((section) => {
    const productCardIntro = section.querySelector(".articles-intro")
    const scroller = section.querySelector(".articles-container")

    if (!productCardIntro || !scroller) return

    const sync = () => {
        const moveIntroInScroller = isDesktopWide()
        const introInScroller = productCardIntro.parentElement === scroller

        if (moveIntroInScroller && !introInScroller) {
            scroller.prepend(productCardIntro)
            productCardIntro.classList.add("in-scroller")
        } else if (!moveIntroInScroller && introInScroller) {
            section.prepend(productCardIntro)
            productCardIntro.classList.remove("in-scroller")
        }
    }

    sync()
    instances.push(sync)
    })
    let resizeTimeout
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout)
        resizeTimeout = setTimeout(() => {
            instances.forEach((sync) => sync())
        }, 100)
    })
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
            updateCarousel(carouselItems, carouselNavButtons, activeSlide, direction, true)
        }
    })
})

carousel2NavButtons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
        e.preventDefault()
        if (activeSlide2 !== index) {
            const direction = index > activeSlide2 ? 'next' : 'prev'
            activeSlide2 = index
            updateCarousel2NavActive()
            centerActiveNavItem()
            updateCarousel(carousel2Items, null, activeSlide2, direction, false)
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

window.addEventListener('resize', () => {
    updateVideoPosters()
    initCarousel2Nav()
    centerActiveNavItem()
})

carouselVolgendeButton.addEventListener("click", nextSlide)
carouselVorigeButton.addEventListener("click", prevSlide)
carousel2VolgendeButton.addEventListener("click", nextSlide2)
carousel2VorigeButton.addEventListener("click", prevSlide2)

carousel2Nav.addEventListener('touchstart', handleNavTouchStart)
carousel2Nav.addEventListener('touchmove', handleNavTouchMove, { passive: false })
carousel2Nav.addEventListener('touchend', handleNavTouchEnd)

carousel2Nav.addEventListener('mousedown', handleNavTouchStart)
carousel2Nav.addEventListener('mousemove', handleNavTouchMove)
carousel2Nav.addEventListener('mouseleave', handleNavTouchEnd)
carousel2Nav.addEventListener('mouseup', handleNavTouchEnd)

carousel2Nav.addEventListener('selectstart', (e) => e.preventDefault())

document.addEventListener("DOMContentLoaded", moveProductCardIntro)