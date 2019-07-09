import listen from './index.js'

window.reload = listen

reload().change({
  onload() {
    console.log('this is my page')
  }
}).focus()