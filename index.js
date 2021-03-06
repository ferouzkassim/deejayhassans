const footer = document.getElementsByTagName('footer'),
    header = document.getElementsByTagName('header'),
    nav = document.querySelector('nav');
const navbar = document.getElementById('nav'),
    heda = document.querySelector('header');
fnav = () => {
    if (innerWidth <= 760) {
        navbar.children[0].style.display = 'none'
        const slider = document.createElement('i')
        nav.appendChild(slider)
        slider.className = 'fas fa-menu-bar slider fa-3x'

    }
};
domloader = (name) => {
    nm = document.querySelector(`${name}`)
    console.log('footer activer')
    console.log(this.nm)
}
heda.onload = fnav
heda.onload(fnav)