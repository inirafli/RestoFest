import UrlParser from '../../routes/url-parser'
import DicodingRestoSource from '../../data/dicoding-resto-source'
import { createRestoDetailTemplate } from '../templates/template-creator'

const Detail = {
  async render() {
    return '<div class="detail-restaurant">'
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await DicodingRestoSource.getRestoDetail(url.id)

    const detailContainer = document.querySelector('.detail-restaurant')
    detailContainer.innerHTML = createRestoDetailTemplate(resto)
  },
}

export default Detail
