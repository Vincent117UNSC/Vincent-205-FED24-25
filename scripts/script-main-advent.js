const sectionAdventInfo = document.querySelector(".advent > section:nth-of-type(3)")
const sectionAdventInfoBtn = document.querySelector(".advent > section:nth-of-type(3) > button")

const AntExpertBtn = document.querySelectorAll(".advent > section:nth-of-type(2) ul > li button")
const AntExpertItems = document.querySelectorAll(".advent > section:nth-of-type(2) ul > li")

function openAdventInfo() {
    sectionAdventInfo.classList.toggle("open")
}

AntExpertBtn.forEach((button, index) => {
    button.addEventListener("click", () => {
        AntExpertItems.forEach((item, i) => {
            if (i === index) {
                item.classList.toggle("is-open")
            } else {
                item.classList.remove("is-open")
            }
        })
    })
})

sectionAdventInfoBtn.addEventListener("click", openAdventInfo)