import DicodingRestoSource from '../../data/dicoding-resto-source'
import { createRestoItemTemplate } from '../templates/template-creator'

const Home = {
  async render() {
    const hero = document.querySelector('.hero')
    hero.style.display = 'flex'

    console.log('Berada di Home')

    return `<h2 class="content-label">Eksplorasi Restoran</h2>
            <div class="restaurant-list"></div>`
  },

  async afterRender() {
    const restoList = document.querySelector('.restaurant-list')
    const restos = await DicodingRestoSource.getListOfResto()
    restos.forEach((resto) => {
      const restoItem = createRestoItemTemplate(resto)
      restoList.innerHTML += restoItem
    })
  },
}

export default Home
