/**
 * Created by timur on 4/17/16.
 */

const go = document.getElementById('go')
const goForm = document.getElementById('go-form')
const urlBar = document.getElementById('urlbar')

const views = document.getElementById('views')
const tabs = document.getElementById('tabs')


var currentView
var currentURL

const viewObserver = new MutationObserver((mutations) => {

  mutations.forEach((mutation) => {

    if (views.hasChildNodes()) {

      Array.prototype.forEach.call(views.childNodes, (view, i) => {

        if (view.classList.contains('active')) {

          currentView = view

          currentURL = currentView.getAttribute('src')

          urlBar.value = currentURL
          tabs.childNodes.item(i).textContent = currentURL
        }
      })
    }
  })
})

viewObserver.observe(views, {attributes: true, subtree: true})

go.onclick = () => {

  goToURL()
}

goForm.addEventListener('submit', (event) => {

  event.preventDefault()
  goToURL()
})



function goToURL() {

  let url;

  // Handle http
  if (urlBar.value.startsWith('http')) {
    url = urlBar.value
  } else {
    url = `http://${urlBar.value}`
  }

  currentView.loadURL(url)

  window.scrollTo(0, 0)

}


