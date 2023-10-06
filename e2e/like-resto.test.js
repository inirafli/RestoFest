const assert = require('assert')

Feature('Like or Unlike Resto')

Scenario('Liking a Resto and Canceling Like', async ({ I }) => {
  I.amOnPage('/')

  I.scrollTo('#main-content')
  I.seeElement('.restaurant-name a')

  const firstResto = locate('.restaurant-name a').first()
  const firstRestoTitle = await I.grabTextFrom(firstResto)
  I.click(firstResto)

  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.seeElement('.restaurant-name a')
  const likedRestoTitle = await I.grabTextFrom('.restaurant-name a')

  assert.strictEqual(firstRestoTitle, likedRestoTitle)

  I.click(locate('.restaurant-name a').first())
  I.seeElement('#likeButton')
  I.click('#likeButton')

  I.amOnPage('/#/favorite')
  I.dontSeeElement('.restaurant-info')
})
