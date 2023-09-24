const Home = {
  async render() {
    const hero = document.querySelector('.hero')
    hero.style.display = 'flex'

    console.log('Berada di Home')

    return `<h2 class="content-label">Eksplorasi Restoran</h2>`
  },

  async afterRender() {

  },
}

export default Home
