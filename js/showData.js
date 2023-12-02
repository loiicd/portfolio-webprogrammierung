import { dineData as data } from './components/objectData.js'

document.addEventListener('DOMContentLoaded', () => {
  const menu = document.getElementById('dineMenu')
  data.map((item) => {
    menu.innerHTML += `
      <li>
        <img src=${item.image} alt=${item.title}>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
      </li>`
  })
})