const footer = document.getElementsByTagName('footer'),
    header = document.getElementsByTagName('header'),
    nav = document.querySelector('nav'),
    navbar = document.getElementById('nav'),
    slider = document.createElement('i'),
    heda = document.querySelector('header');
fnav = () => {
    if (innerWidth <= 760) {
        navbar.children[0].style.display = 'none';
        nav.appendChild(slider)
        slider.className = 'mdi mdi-menu mdi-48px'
    } else {}
};
slider.onclick = () => {
    if (this.style.display = 'none') {
        alert('binf')

    }
}
domloader = (name) => {
    nm = document.querySelector(`${name}`)
    console.log('footer activer')
    console.log(this.nm)
}
heda.onload = fnav
heda.onload(fnav)