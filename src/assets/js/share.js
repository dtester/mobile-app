const link = encodeURI('https://dtester.github.io/mobile-app')
const title = encodeURI('Mobile App Layout')
const image = encodeURI(`${link}/img/screenshot.jpg`)
const links = {
  vk: `https://vk.com/share.php?url=${encodeURI(link)}&title="${title}&image=${image}`,
  fb: `https://www.facebook.com/sharer/sharer.php?u=${link}&t=${title}&picture=${image}`,
  tw: `http://www.twitter.com/intent/tweet?url=${link}`,
  pt: `https://www.pinterest.com/pin/create/button/?url=${link}&description=${title}&media=${image}`
}

document.querySelectorAll('[data-share').forEach(item => {
  item.addEventListener('click', () => {
    const type = item.dataset.share

    if (links[type]){
      window.open(links[type], 'Поделиться', 'location').focus()
    }
  })
})