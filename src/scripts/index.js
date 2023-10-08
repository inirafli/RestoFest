import 'regenerator-runtime'
import 'lazysizes'
import 'lazysizes/plugins/parent-fit/ls.parent-fit'
import '../styles/main.scss'
import App from './views/app'
import swRegister from './utils/sw-register'

const app = new App({
  button: document.querySelector('#menu'),
  hero: document.querySelector('.hero'),
  navLinks: document.querySelectorAll('.nav-item a'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('.content'),
  loading: document.querySelector('.loading-container'),
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
})
