export default function showMenu() {
  const toggle = document.getElementById('toggle'),
        menu = document.getElementById('menu')
  if(toggle) {
    toggle.addEventListener('click', e => {
      menu.classList.toggle('showMenu')
    })
  }
}