const navBtn = document.getElementById('nav-btn')
const mobileNav = document.getElementById('mobile-nav')
const hamburger = document.getElementById('hamburger')
const close = document.getElementById('close')

let isNavOpen = false

function handleClick() {
  isNavOpen = !isNavOpen

  if (isNavOpen) {
    mobileNav.classList.add('opened')
    hamburger.classList.add('hidden')
    close.classList.remove('hidden')
  } else {
    mobileNav.classList.remove('opened')
    hamburger.classList.remove('hidden')
    close.classList.add('hidden')
  }
}

navBtn.addEventListener('click', handleClick)
