import API_ENDPOINT from '../globals/api-endpoints'

class DicodingRestoSource {
  static async getListOfResto() {
    const response = await fetch(API_ENDPOINT.LIST)
    const data = await response.json()
    if (data.error) {
      throw new Error(data.message)
    }
    return data.restaurants
  }

  static async getRestoDetail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id))
    const data = await response.json();
    if (data.error) {
      throw new Error(data.message)
    }
    return data.restaurant
  }

  static async postReview(reviewData) {
    const response = await fetch(API_ENDPOINT.ADD_REVIEW, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reviewData),
    })

    const data = await response.json()
    if (data.error) {
      throw new Error(data.message)
    }
    return data.customerReviews
  }
}

export default DicodingRestoSource
