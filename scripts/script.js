// JavaScript Document
console.log("hi");

// Hamburger menu
const hamburgerMenuButton = document.querySelector("header button")
const sluitMenuButton = document.querySelector("nav button")
const zoekenButton = document.querySelector("header button:nth-of-type(2)")
const terugZoekenButton = document.querySelector("nav:nth-of-type(2) button")

const openItemNieuw = document.querySelector("nav ul li button")

hamburgerMenuButton.onclick = openHambergerMenu
sluitMenuButton.onclick = sluitHamburgerMenu
zoekenButton.onclick = openZoeken
terugZoekenButton.onclick = terugVanZoeken
openItemNieuw.onclick = openMenuItemNieuw

function openHambergerMenu() {
    let deNav = document.querySelector("header nav")
    let body = document.querySelector("body")
    deNav.classList.add("menuOpen")
    body.classList.add("menuOpen")
}

function sluitHamburgerMenu() {
    let deNav = document.querySelector("header nav")
    let body = document.querySelector("body")
    let menuItems = document.querySelectorAll("header nav:first-of-type ul > li > section")
    deNav.classList.remove("menuOpen")
    body.classList.remove("menuOpen")
    menuItems.forEach(section => {
        section.classList.remove("menuItemOpen")
    })
}

function openZoeken() {
    let deZoekNav = document.querySelector("header nav:nth-of-type(2)")
    deZoekNav.classList.add("zoekOpen")
}

function terugVanZoeken() {
    let deZoekNav = document.querySelector("header nav:nth-of-type(2)")
    deZoekNav.classList.remove("zoekOpen")
}

function openMenuItemNieuw() {
    let sectionNieuw = document.querySelector("nav ul li section")
    sectionNieuw.classList.add("menuItemOpen")
}