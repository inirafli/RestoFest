import DrawerInitiator from '../utils/drawer-init'
import UrlParser from '../routes/url-parser'
import routes from '../routes/routes'

class App {
  constructor({ button, hero, navLinks, drawer, content }) {
    this._button = button
    this._hero = hero
    this._navLinks = navLinks
    this._drawer = drawer
    this._content = content

    this._initAppShell()
  }

  _initAppShell() {
    DrawerInitiator.init({
      button: this._button,
      hero: this._hero,
      navLinks: this._navLinks,
      drawer: this._drawer,
      content: this._content,
    })
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner()
    const page = routes[url]

    if (url !== '/home') {
      this._hero.style.display = 'none'
    }

    this._content.innerHTML = await page.render()
    await page.afterRender()
  }
}

export default App