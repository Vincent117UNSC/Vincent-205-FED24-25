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


const pijlSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61 54">
    <title>Pijl naar links voor terugknop</title>
    <path d="M26.675 52.04C26.675 52.04 3.815 29.19 1.575 26.94C1.475 26.84 1.475 26.68 1.575 26.58L26.675 1.5M1.875 26.77H59.475"/>
</svg>`
const kruisSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 58.98 58.98">
    <title>Kruisicoon voor sluiten</title>
    <line class="cls-1" x1="1.5" y1="57.48" x2="57.48" y2="1.5"/>
    <line class="cls-1" x1="57.48" y1="57.48" x2="1.5" y2="1.5"/>
</svg>`

const ulTop = document.querySelector("header div:first-of-type > ul:first-of-type")
const listItems = ulTop.querySelectorAll("li")

let currentIndex = 0
let lastScrollTop = 0

function isDesktop() {
    return window.innerWidth >= 1024;
}

function updateActiveItem() {
    listItems[currentIndex].classList.remove("active")
    currentIndex = (currentIndex + 1) % listItems.length
    listItems[currentIndex].classList.add("active")
}
setInterval(updateActiveItem, 3500)

function openHamburgerMenu() {
    body.classList.add("menuOpenBodyHidden")
    deNav.classList.add("menuOpen")
}

function sluitHamburgerMenu() {
    body.classList.remove("menuOpenBodyHidden")

    deNav.classList.remove("menuOpen")
    deNav.classList.remove("openButHidden")
    deNav.scrollTop = 0

    sectionsLaag2.forEach(section => section.classList.remove("laagTweeOpen", "openButHidden"))
    sectionsLaag2.forEach(section => section.scrollTop = 0)

    sectionsLaag3.forEach(section => section.classList.remove("laagDrieOpen", "openButHidden"))
    sectionsLaag3.forEach(section => section.scrollTop = 0)
}

function openZoeken() {
    deZoekNav.classList.add("zoekOpen")
    body.classList.add("menuOpenBodyHidden")
}

function terugVanZoeken() {
    deZoekNav.classList.remove("zoekOpen")
    body.classList.remove("menuOpenBodyHidden")
}

function updateSluitButtonIcons() {
    const usedSVG = isDesktop() ? kruisSVG : pijlSVG

    sluitButtonsLaag2.forEach(button => {
        button.innerHTML = usedSVG
    })
    
    sluitButtonsLaag3.forEach(button => {
        button.innerHTML = usedSVG
    })
}

//findParent met wat hulp van chatGPT, erg lang gestruggled om het werkend te krijgen
function findParentIndex(child, parentArray) {
    return Array.from(parentArray).findIndex((parent) => parent.contains(child))
}

openButtonsLaag2.forEach((button, index) => {
    button.addEventListener("click", () => {
        sectionsLaag2.forEach((section, i) => {
            if (i !== index) {
                section.classList.remove("laagTweeOpen")
            }
        })

        sectionsLaag3.forEach((section) => {
            section.classList.remove("laagDrieOpen")
        })

        if (!isDesktop()) {
            deNav.classList.add("openButHidden")
        } else {
            body.classList.add("menuOpenBodyHidden")
        }
        sectionsLaag2[index].classList.add("laagTweeOpen")
    })
})

sluitButtonsLaag2.forEach((button, index) => {
    button.addEventListener("click", () => {
        deNav.classList.remove("openButHidden")
        sectionsLaag2[index].classList.remove("laagTweeOpen")
        sectionsLaag2[index].scrollTop = 0

        sectionsLaag3.forEach((section) => {
            if (sectionsLaag2[index].contains(section)) {
                section.classList.remove("laagDrieOpen")
            }
        })

        if (isDesktop()) {
            body.classList.remove("menuOpenBodyHidden")
        }
    })
})

openButtonsLaag3.forEach((button, index) => {
    button.addEventListener("click", () => {
        const parentIndex = findParentIndex(sectionsLaag3[index], sectionsLaag2)
        sectionsLaag3.forEach((section, i) => {
            if (findParentIndex(section, sectionsLaag2) === parentIndex && i !== index) {
                section.classList.remove("laagDrieOpen")
            }
        })

        sectionsLaag3[index].classList.add("laagDrieOpen")

        const parentSection = sectionsLaag2[findParentIndex(sectionsLaag3[index], sectionsLaag2)]
        if (parentSection) {
            parentSection.classList.add("openButHidden")
        }
    })
})

sluitButtonsLaag3.forEach((button, index) => {
    button.addEventListener("click", () => {
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

hamburgerMenuButton.addEventListener("click", openHamburgerMenu)
sluitMenuButton.addEventListener("click", sluitHamburgerMenu)
zoekenButton.addEventListener("click", openZoeken)
terugZoekenButton.addEventListener("click", terugVanZoeken)

updateSluitButtonIcons()
window.addEventListener("resize", updateSluitButtonIcons)