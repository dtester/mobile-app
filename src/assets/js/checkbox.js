import delegate from './delegate'

delegate('click', '.setting__checkbox', (e) => {
  e.classList.toggle('setting__checkbox--active')
})