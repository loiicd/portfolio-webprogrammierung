import { dineData as data } from './object_catalouge.js'

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('searchInput')
  const dom = document.getElementById('headerExpand')

  searchInput.addEventListener('keyup', () => {
    test(searchInput, dom, data)
  })
})

const test = (searchInput, dom, data) => {
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchInput.value.toLowerCase())
  )
  if (searchInput.value !== '') {
    dom.childNodes[1].innerHTML = `<p>${searchInput.value}</p>`
    if (filteredData.length === 0) {
      dom.childNodes[1].innerHTML += '<p>Keine Ergebnisse!</p>'
    } else {
      dom.childNodes[1].innerHTML += '<p>Ergebnisse:</p>'
      filteredData.map((item) => dom.childNodes[1].innerHTML += `<p>${item.title}</p>` )
    }
  } else {
      dom.childNodes[1].innerHTML = ''
  }
}