import CONFIG from '../../globals/config';

const createRestoItemTemplate = (resto) => {
  const { id, name, description, pictureId, city, rating } = resto;
  const imageUrl = `${CONFIG.BASE_IMAGE_URL}${pictureId}`;
  const restoUrl = `/#/detail/${id}`;

  return `
    <article class="card">
      <img data-src="${imageUrl}" alt="${name}" class="lazyload">
      <div class="restaurant-info">
        <div class="restaurant-label">
          <p class="restaurant-city">Kota ${city}</p>
        </div>
        <h3 class="restaurant-name"><a href="${restoUrl}">${name}</a></h3>
        <p class="restaurant-rating">⭐️ ${rating}</p>
        <p class="restaurant-description">
          ${description}
        </p>
      </div>
    </article>
  `
}

const createRestoDetailTemplate = (resto) => {
  const { name, description, pictureId, city, address, categories,
    menus, rating, customerReviews } = resto
  const imageUrl = `${CONFIG.BASE_IMAGE_URL}${pictureId}`

  const categoryList = categories
      .map((category) => `<li class="category-item">${category.name}</li>`)
      .join('')

  const foodList = menus.foods
      .map((food) => `<li class="menu-item">${food.name}</li>`)
      .join('')

  const drinkList = menus.drinks
      .map((food) => `<li class="menu-item">${food.name}</li>`)
      .join('')

  const reviewList = customerReviews
      .map((review) => `
      <div class="review-card">
        <h4 class="customer-name">${review.name}</h4>
        <p class="customer-review">"${review.review}"</p>
        <p class="review-date">${review.date}</p>
      </div>
    `)
      .join('')

  return `
      <div class="detail-restaurant">
        <div class="restaurant-overview">
          <div class="image-container">
            <img src="${imageUrl}" alt="${name}">
          </div>
          <div class="detail-info">
            <h3 class="detail-name">${name}</h3>
            <p class="detail-description">${description}</p>
            <div class="restaurant-location">
              <h3 class="location-label">Alamat</h3>
              <p class="location-content">${address}</p>
            </div>
            <div class="restaurant-location">
              <h3 class="location-label">Kota</h3>
              <p class="location-content">${city}</p>
            </div>
          </div>
        </div>
        <div class="restaurant-general">
          <div class="restaurant-categories">
            <h3 class="general-label">Kategori</h3>
            <ul class="categories-list">
              ${categoryList}
            </ul>
          </div>
          <div class="menu-category">
            <h3 class="general-label">Makanan</h3>
            <ul class="menu-list">
              ${foodList}
            </ul>
          </div>
          <div class="menu-category">
            <h3 class="general-label">Minuman</h3>
            <ul class="menu-list">
              ${drinkList}
            </ul>
          </div>
          <div class="menu-rating">
            <h3 class="general-label">Rating Restoran</h3>
            <p class="star-rating">⭐️ ${rating}/5</p>
          </div>
          <div class="customer-reviews">
            <h3 class="general-label">Ulasan Pelanggan</h3>
            <div class="reviews-list">
              ${reviewList}
            </div>
          </div>
          <div class="add-review-container">
            <h3 class="general-label">Tambahkan Review Anda</h3>
            <form id="reviewForm" class="review-form">
              <div class="review-name">
                <label for="reviewName">Nama Anda:</label>
                <input type="text" id="reviewName" name="reviewName" required>
              </div>
              <div class="review-text">
                <label for="reviewText">Tulis Review Anda:</label>
                <textarea id="reviewText" name="reviewText" rows="4" 
                required></textarea>
              </div>
              <button type="submit">Submit Review</button>
            </form>
          </div>
        </div>
      </div>
    `
}

const createLikeButtonTemplate = () => `
  <button aria-label="like this resto" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this resto" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
}
