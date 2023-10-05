import FavoriteRestoDB from '../src/scripts/data/favorite-restos-idb'
import * as TestFactories from './helper/test-factories'

describe('Unliking a Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>'
  }

  beforeEach(async () => {
    addLikeButtonContainer()
    await FavoriteRestoDB.putResto({ id: 1 })
  })

  afterEach(async () => {
    await FavoriteRestoDB.deleteResto(1)
  })

  it('Should display Unlike Button when the Resto has been Liked before', async () => {
    await TestFactories.createLikeButtonWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy()
  })

  it('Should not display Like Button when the Resto has been Liked before', async () => {
    await TestFactories.createLikeButtonWithResto({ id: 1 })

    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy()
  })

  it('Should be able to Remove Liked Resto from the List', async () => {
    await TestFactories.createLikeButtonWithResto({ id: 1 })

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'))

    expect(await FavoriteRestoDB.getAllRestos()).toEqual([])
  })

  it('Should not Throw Error when User clicks Unlike Button if the Unliked Resto is not in the List', async () => {
    await TestFactories.createLikeButtonWithResto({ id: 1 })

    await FavoriteRestoDB.deleteResto(1)

    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'))
    expect(await FavoriteRestoDB.getAllRestos()).toEqual([])
  })
})
