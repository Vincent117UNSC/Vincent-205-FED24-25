const winkelmandBtn = document.querySelector("header > div:last-of-type > div > button:last-of-type")
const winkelmandDialog = document.querySelector(".winkelmandje")
const sluitWinkelmandBtn = document.querySelector(".winkelmandje > button")

const d = document.querySelector("dialog.winkelmandje");
console.log("rect:", d.getBoundingClientRect());
console.log("computed width:", getComputedStyle(d).width);
console.log("viewport:", window.innerWidth);

function openWinkelmand() {
    winkelmandDialog.showModal()

    setTimeout(() => {
        winkelmandDialog.classList.add("is-open")
     }, 10)
}

function sluitWinkelmand() {
    winkelmandDialog.classList.remove("is-open")

    setTimeout(() => {
        winkelmandDialog.close()
    }, 300)
}

winkelmandBtn.addEventListener("click", openWinkelmand)
sluitWinkelmandBtn.addEventListener("click", sluitWinkelmand)