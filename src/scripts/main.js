const main = () => {
  const menu = document.querySelector('#menu')
  const hero = document.querySelector('.hero')
  const main = document.querySelector('main')
  const drawer = document.querySelector('#drawer')
  const navLinks = document.querySelectorAll('.nav-item a');

  menu.addEventListener('click', (event) => {
    drawer.classList.toggle('open')
    event.stopPropagation()
  })

  hero.addEventListener('click', () => {
    drawer.classList.remove('open')
  })

  main.addEventListener('click', () => {
    drawer.classList.remove('open')
  })

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open')
    })
  })

  // For Production
  // fetch('/dist/data/DATA.json')

  // For Development
  fetch('/data/DATA.json')
      .then((response) => response.json())
      .then((data) => {
        createRestaurantList(data.restaurants)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
}

const createRestaurantList = (restaurants) => {
  const restaurantList = document.querySelector('.restaurant-list')

  restaurants.forEach((restaurant) => {
    const card = createRestaurantCard(restaurant)
    restaurantList.appendChild(card)
  })
}

const createRestaurantCard = (restaurant) => {
  const card = document.createElement('article')
  card.classList.add('card')

  const img = document.createElement('img')
  img.src = restaurant.pictureId
  img.alt = `Gambar Restoran ${restaurant.name}`
  card.appendChild(img)

  const restaurantInfo = document.createElement('div')
  restaurantInfo.classList.add('restaurant-info')

  const restaurantLabel = document.createElement('div')
  restaurantLabel.classList.add('restaurant-label')
  const city = document.createElement('p')
  city.classList.add('restaurant-city')
  city.textContent = `Kota ${restaurant.city}`
  restaurantLabel.appendChild(city)

  const name = document.createElement('h3')
  name.classList.add('restaurant-name')
  name.textContent = restaurant.name

  const rating = document.createElement('p')
  rating.classList.add('restaurant-rating')
  rating.textContent = `⭐️ ${restaurant.rating}`

  const description = document.createElement('p')
  description.classList.add('restaurant-description')
  description.textContent = restaurant.description

  restaurantInfo.appendChild(restaurantLabel)
  restaurantInfo.appendChild(name)
  restaurantInfo.appendChild(rating)
  restaurantInfo.appendChild(description)

  card.appendChild(restaurantInfo)

  return card
}

export default main
