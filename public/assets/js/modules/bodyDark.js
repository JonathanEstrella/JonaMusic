export default function bgDark() {
  const dark = document.getElementById('dark'),
      page = document.querySelector('.page'),
      header = document.querySelector('.mainHeader')

  if(dark) {
    dark.addEventListener('click', e => {
      page.classList.toggle('darkBG')
      header.classList.toggle('headerDark')
      // dark.textContent = 'Light'
    })
  }
}