const DrawerInitiator = {
  init({ button, hero, navLinks, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer)
    })

    hero.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer)
    })

    navLinks.forEach((link) => {
      link.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer)
      })
    })

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer)
    })
  },

  _toggleDrawer(event, drawer) {
    event.stopPropagation()
    drawer.classList.toggle('open')
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open')
  },
}

export default DrawerInitiator
