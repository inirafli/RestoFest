/* eslint-disable no-unused-vars */
import 'regenerator-runtime'
import '../styles/main.scss'
import main from './main.js'
import App from './views/app'

const app = new App({
  button: document.querySelector('#menu'),
  hero: document.querySelector('.hero'),
  navLinks: document.querySelectorAll('.nav-item a'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('.content'),
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
})
