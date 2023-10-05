import FavoriteRestoDB from '../src/scripts/data/favorite-restos-idb'
import * as TestFactories from './helper/test-factories'

describe('Liking a Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(() => {
    addLikeButtonContainer()
  })

  it('Should show the Like Button when the Resto has not been liked before', async () => {
    await TestFactories.createLikeButtonWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy()
  })

  it('Should not show the Unlike Button when the Resto has not been liked before', async () => {
    await TestFactories.createLikeButtonWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy()
  })

  it('Should be able to Like the Resto', async () => {
    await TestFactories.createLikeButtonWithResto({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    const resto = await FavoriteRestoDB.getResto(1)
    expect(resto).toEqual({ id: 1 })

    await FavoriteRestoDB.deleteResto(1)
  })

  it('Should not be able to Like the Resto when its already been Liked', async () => {
    await TestFactories.createLikeButtonWithResto({ id: 1 })

    await FavoriteRestoDB.putResto({ id: 1 })

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestoDB.getAllRestos()).toEqual([{ id: 1 }])

    await FavoriteRestoDB.deleteResto(1)
  })

  it('Should not be able to Add a Resto when it has no ID', async () => {
    await TestFactories.createLikeButtonWithResto({})

    document.querySelector('#likeButton').dispatchEvent(new Event('click'))

    expect(await FavoriteRestoDB.getAllRestos()).toEqual([])
  })
})
