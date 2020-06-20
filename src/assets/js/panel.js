import { loadContent } from './content'

const items = document.querySelectorAll('.panel__item')
const target = document.querySelector('.panel__target')
let active = items[0]

const setTarget = (item, target) => {
  target.style.width = item.offsetWidth + 'px'
  target.style.height = item.offsetHeight + 'px'
  target.style.left = item.offsetLeft + 'px'
  target.style.top = item.offsetTop + 'px'
  item.classList.add('panel__item--active')
}

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    items.forEach((item, idx) => {
      item.classList.remove('panel__item--active')
    })

    active = item
    setTarget(item, target)
    loadContent(item.dataset.route)
  })
})

window.addEventListener('load', setTarget(active, target))
window.addEventListener('resize', setTarget(active, target))