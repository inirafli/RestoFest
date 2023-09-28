import UrlParser from '../../routes/url-parser'
import DicodingRestoSource from '../../data/dicoding-resto-source'
import { createRestoDetailTemplate } from '../templates/template-creator'
import LikeButtonInit from '../../utils/like-button-initiator'
import SubmitButtonInit from '../../utils/submit-button-initiator'

const Detail = {
  async render() {
    return `
      <div id="likeButtonContainer"></div>
      <div class="detail-restaurant">
    `
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner()
    const resto = await DicodingRestoSource.getRestoDetail(url.id)
    const detailContainer = document.querySelector('.detail-restaurant')

    LikeButtonInit.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      resto: resto,
    })

    detailContainer.innerHTML = createRestoDetailTemplate(resto)

    const reviewForm = document.querySelector('#reviewForm')
    if (reviewForm) {
      SubmitButtonInit.init({
        reviewForm: reviewForm,
        restoId: resto.id,
      })
    }
  },
}

export default Detail
