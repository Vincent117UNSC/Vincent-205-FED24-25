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

const deZoekNav = document.querySelector("header div div nav")
const zoekenButton = document.querySelector("header div > div button")
const terugZoekenButton = document.querySelector("header div > div nav div button")

const ulTop = document.querySelector("header ul")
const listItems = ulTop.querySelectorAll("li")

let currentIndex = 0
let lastScrollTop = 0

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