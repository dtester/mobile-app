export default (event, elem, callback) => {
  document.addEventListener(event, e => {
    if (e.target.closest(elem)) {
      callback(e.target)
    }
  })
}