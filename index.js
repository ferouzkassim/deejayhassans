const navi = document.querySelector('#nav'),
    nav = document.querySelector('nav'),
    sliderbar = document.createElement('i');
if (innerWidth <= 760) {
    nav.appendChild(sliderbar)
    sliderbar.classList = "mdi mdi-filter-variant mdi-48px"
    sliderbar.onclick = () => {
        nav.children[0].classList.toggle('show')
        nav.children[0].style.display = ''
        sliderbar.classList.toggle('mdi-rotate-90')
    }
}