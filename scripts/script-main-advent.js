const sectionAdventInfo = document.querySelector(".advent > section:nth-of-type(3)")
const sectionAdventInfoBtn = document.querySelector(".advent > section:nth-of-type(3) > button")

function openAdventInfo() {
    sectionAdventInfo.classList.toggle("open")
}

sectionAdventInfoBtn.addEventListener("click", openAdventInfo)