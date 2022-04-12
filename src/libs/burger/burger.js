import './burger.scss'

export default () =>
     document.addEventListener('DOMContentLoaded', () => {
          const btns = document.querySelectorAll('.burger')

          Array.prototype.forEach.call(btns, (btn) => {
               const links = document.querySelector(btn.dataset.burgerTarget)
               btn.addEventListener('click', () => btnHandler(btns, links))
               links.addEventListener('click', event => linksHandler(event.target.tagName, btn, links))

          })

     })

const btnHandler = (btns, links) => {
     Array.prototype.forEach.call(btns, (btn) =>
          btn.classList.toggle('active'))
     links.classList.toggle('active')
     document.body.classList.toggle('overflowed')
}

const linksHandler = (tagName, btn, links) => {
     if (tagName.toLowerCase() === 'a') {
          links.classList.remove('active')
          btn.classList.remove('active')
          document.body.classList.remove('overflowed')
     }
}