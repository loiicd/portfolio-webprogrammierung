import { dineData as data } from './object_catalouge.js'

document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById('searchInput')
  const htmlElement = document.getElementById('searchResults')

  searchInput.addEventListener('keyup', () => {
    test(searchInput, htmlElement, data)
  })
})

const test = (searchInput, htmlElement, data) => {
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(searchInput.value.toLowerCase())
  )

  
  if (searchInput.value !== '') {
    htmlElement.childNodes[1].innerHTML = `<p>${searchInput.value}</p>`
    if (filteredData.length === 0) {
      htmlElement.childNodes[1].innerHTML += '<p>Keine Ergebnisse!</p>'
    } else {
      htmlElement.childNodes[1].innerHTML += '<p>Ergebnisse:</p>'
      filteredData.map((item) => htmlElement.childNodes[1].innerHTML += `<p>${item.title}</p>` )
    }
  } else {
    htmlElement.childNodes[1].innerHTML = ''
  }
}