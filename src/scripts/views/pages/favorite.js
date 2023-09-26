import FavoriteRestoDB from '../../data/favorite-restos-idb'
import { createRestoItemTemplate } from '../templates/template-creator'

const Favorite = {
  async render() {
    console.log('Berada di Favorite')

    return `<h2 class="content-label">Restoran Favorit</h2>
            <div class="restaurant-list"></div>`
  },

  async afterRender() {
    const restoList = document.querySelector('.restaurant-list')
    const favoriteRestos = await FavoriteRestoDB.getAllRestos()
    favoriteRestos.forEach((resto) => {
      const restoItem = createRestoItemTemplate(resto)
      restoList.innerHTML += restoItem
    })
  },
}

export default Favorite

