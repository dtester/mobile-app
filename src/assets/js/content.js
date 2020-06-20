const cache = {}
const routes = [ 'profile', 'friends', 'messages', 'setting' ]
const view = document.querySelector('.layout__content')
const title = document.querySelector('.header__title')

export const loadContent = (type) => {
  if (!routes.includes(type)) {
    throw new Error(`Шаблон ${type} не найден`)
  }

  title.innerHTML = document.title = type[0].toUpperCase() + type.slice(1)

  if (cache[type]) {
    return view.innerHTML = cache[type]
  }

  fetch(`tpl/${type}.tpl`).then(res => {
    res.text().then(data => {
      view.innerHTML = cache[type] = data
    })
  })
}