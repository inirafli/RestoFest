Feature('User Review Feature')

Scenario('Add a Resto Review', async ({ I }) => {
  I.amOnPage('/')

  I.scrollTo('#main-content')
  I.seeElement('.restaurant-name a')
  I.click(locate('.restaurant-name a').first())

  I.scrollTo('.review-form')

  I.fillField('#reviewName', 'Rafli')
  I.fillField('#reviewText', 'Saya sangat menyukai restoran ini!')
  I.click('Submit Review')

  I.wait(3)

  I.scrollTo('.reviews-list')

  I.see('Rafli', locate('.customer-name').last())
  I.see('Saya sangat menyukai restoran ini!', locate('.customer-review').last())
})
