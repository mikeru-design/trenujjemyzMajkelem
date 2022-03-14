document.addEventListener('DOMContentLoaded', function(){


const nav = document.querySelector('#navbar')
const navBrand = document.querySelector('.navbar-brand')
const navMenuMobile = document.querySelector('.navbar-collapse')
const navLink = document.querySelectorAll('.nav-link')
console.log(navLink);


function addShadow() {
    if (window.scrollY >= 300) {
        nav.classList.add('shadow-BG')
        navBrand.classList.add('smaller-Nav-Logo')
    } else {
        nav.classList.remove('shadow-BG')
        navBrand.classList.remove('smaller-Nav-Logo')
    }
}

navLink.forEach(item => item.addEventListener('click', () => navMenuMobile.classList.remove('show')))


window.addEventListener('scroll', addShadow)

})