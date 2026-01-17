const horizontalScrollElements = document.querySelectorAll(`
    .index section:first-of-type ul:first-of-type, 
    .articles-container,
    .index section:nth-of-type(6) ul,
    .advent > section:first-of-type > div:last-of-type
`)

let startX
let scrollLeft
let isDown
let hasMoved = false
let isDragging = false
let currentScrollTarget = null

// Horizontaal scrollen met muis on draggen bron: https://codepen.io/Gutto/pen/GBLPyN
function mouseIsDown(e){
    currentScrollTarget = e.currentTarget
    isDown = true
    hasMoved = false
    isDragging = false
    startX = e.pageX - currentScrollTarget.offsetLeft
    scrollLeft = currentScrollTarget.scrollLeft
    currentScrollTarget.classList.add('scrolling')
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

console.log('Gevonden elementen:', horizontalScrollElements.length)
horizontalScrollElements.forEach(el => {
    console.log('Element:', el)
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