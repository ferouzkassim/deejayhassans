const navi = document.querySelector('#nav'),
    nav = document.querySelector('nav'),
    imgs = document.querySelector('#imgsrc'),
    sliderbar = document.createElement('i'),
    imagfiles = [
        'back.jpeg', 'back.png'
    ];
if (innerWidth <= 760) {
    nav.appendChild(sliderbar)
    sliderbar.classList = "mdi mdi-filter-variant mdi-48px"
    sliderbar.onclick = () => {
        nav.children[0].classList.toggle('show')
        nav.children[0].style.display = ''
        sliderbar.className.toggle('mdi-rotate-90')
    }
    nav.onmouseleave = () => {
        console.log('big')
        nav.children[0].style.display = 'none'
    }
}
imgloader = () => {
    let img = document.createElement('img')
    imgs.appendChild(img)

    img.className = 'slider-image'
    setTimeout(() => {
        for (const imgsr of imagfiles) {
            img.src = `../img/${imgsr}`
            console.log(`../img/${imgsr}`)

        }
    }, 1200)

}
onload = imgloader()