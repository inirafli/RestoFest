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
}

export default DicodingRestoSource
