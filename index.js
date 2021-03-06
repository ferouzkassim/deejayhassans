const footer = document.getElementsByTagName('footer'),
    header = document.getElementsByTagName('header'),
    nav = document.getElementsByTagName('nav');
const navbar = document.getElementById('nav'),
    heda = document.querySelector('header');
fnav = () => {
    if (innerWidth <= 760) {
        navbar.children[0].style.display = 'none'
    }
};
domloader = (name) => {
    nm = document.querySelector(`${name}`)
    console.log('footer activer')
    console.log(this.nm)
}
heda.onload = fnav
heda.onload(fnav)