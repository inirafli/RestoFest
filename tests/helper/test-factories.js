import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter'
import FavoriteRestoDB from '../../src/scripts/data/favorite-restos-idb'

const createLikeButtonWithResto = async (resto) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteMovies: FavoriteRestoDB,
    resto,
  })
}

export { createLikeButtonWithResto }
