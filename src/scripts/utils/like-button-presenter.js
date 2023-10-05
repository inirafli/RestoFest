import FavoriteRestoDB from '../data/favorite-restos-idb'
import {
  createLikeButtonTemplate,
  createLikedButtonTemplate,
} from '../views/templates/template-creator'

const LikeButtonPresenter = {
  async init({ likeButtonContainer, favoriteRestos, resto }) {
    this._likeButtonContainer = likeButtonContainer,
    this._favoriteRestos = favoriteRestos
    this._resto = resto

    await this._renderButton()
  },

  async _renderButton() {
    const { id } = this._resto

    if (await this._isRestoExisted(id)) {
      this._renderLiked()
    } else {
      this._renderLike()
    }
  },

  async _isRestoExisted(id) {
    const resto = await FavoriteRestoDB.getResto(id)
    return !!resto
  },

  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoDB.putResto(this._resto)
      this._renderButton()
    })
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createLikedButtonTemplate()

    const likeButton = document.querySelector('#likeButton')
    likeButton.addEventListener('click', async () => {
      await FavoriteRestoDB.deleteResto(this._resto.id)
      this._renderButton()
    })
  },
}

export default LikeButtonPresenter
