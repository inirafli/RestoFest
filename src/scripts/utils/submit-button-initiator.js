import DicodingRestoSource from '../data/dicoding-resto-source'

const SubmitButtonInit = {
  init({ reviewForm, restoId }) {
    this._reviewForm = reviewForm
    this._restoId = restoId

    this._reviewNameInput = this._reviewForm.querySelector('#reviewName')
    this._reviewTextInput = this._reviewForm.querySelector('#reviewText')

    this._reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault()
      await this._submitReview()
      window.location.reload()
    })
  },

  async _submitReview() {
    const reviewData = {
      id: this._restoId,
      name: this._reviewNameInput.value,
      review: this._reviewTextInput.value,
    }

    try {
      await DicodingRestoSource.postReview(reviewData)
      this._clearForm()
    } catch (error) {
      console.log('Error submitting Review', error)
    }
  },

  _clearForm() {
    this._reviewNameInput.value = ''
    this._reviewTextInput.value = ''
  },
}

export default SubmitButtonInit
