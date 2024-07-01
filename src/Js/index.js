'use strict'

// Navbar Toggle
const overlay = document.querySelector("[data-overlay")
const navOpenBtn = document.querySelector("[data-nav-open-btn]")
const navbar = document.querySelector('[data-navbar]')
const navCloseBtn = document.querySelector('[data-nav-close-btn]')
const navLinks = document.querySelector('[data-nav-link]')

const navElemArr = [overlay, navOpenBtn,navCloseBtn]

const navToggleEvent = (elem) => {
 for (let i=0; i< elem.length; i++){
   elem[i].addEventListener('click', function(){
    navbar.classList.toggle('active')
    overlay.classList.toggle('active')
   })
 }
}

navToggleEvent(navElemArr)
navToggleEvent(navLinks)

