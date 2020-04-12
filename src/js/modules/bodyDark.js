export default function bgDark() {
  const dark = document.getElementById('dark'),
      page = document.querySelector('.page'),
      nav = document.querySelector('nav')

  if(dark) {
    dark.addEventListener('click', e => {
      page.classList.toggle('darkBG')
      nav.classList.toggle('navDark')
      // dark.textContent = 'Light'
    })
  }
}