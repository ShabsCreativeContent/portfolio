// javascript for my Portfolio

const headNav = document.querySelector('.info')
const menu = document.querySelector('#menuButton')
const heading = document.getElementById('about')
const ready = document.getElementById('ready')
const about = document.getElementById('me')
const service = document.querySelector('.service1')
// press ND make menu show
document.querySelector('#menuButton').onclick = menuButton
document.querySelector('.click').onclick = click
document.getElementById('click').addEventListener('click', reloadPage)

function menuButton() {
  // show the menu on the page
  headNav.classList.toggle('infoButton')
  menu.classList.toggle('faBars')

}

function click() {
  // show About me
  heading.innerText = 'About Me'
  ready.style.display = 'none'
  about.style.display = 'block'
  service.style.display = 'block'
  document.querySelector('.click').style.display = 'none'
  document.getElementById('click').style.display = 'block'
  document.getElementById('click').innerText = 'RESUME'

}

function reloadPage(){
  location.reload()
}
