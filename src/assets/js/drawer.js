import delegate from './delegate'

const app = document.querySelector('#app')
const toggleState = (type) => {
  if (app.dataset[type]) {
    app.removeAttribute(`data-${type}`)
  } else {
    app.setAttribute(`data-${type}`, true)
  }
}

delegate('click', '.burger', () => toggleState('drawer'))
delegate('click', '.layout__overlay', () => toggleState('drawer'))