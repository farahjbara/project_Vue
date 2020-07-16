/* Styles */
import '@/scss/main.scss'

/* Core */
import Vue from 'vue'
import Buefy from 'buefy'

/* Router & Store & axios */
import router from './router'
import store from './store'

/* Service Worker */
import './registerServiceWorker'

/* Vue. Main component */
import App from './App.vue'

/* Calendar */
import VCalendar from 'v-calendar'
/* Axios */
import axios from 'axios'

window.axios = axios

axios.defaults.baseURL = 'http://localhost/api'

/* Default title tag */
const defaultDocumentTitle = 'Admin Null Bulma'

/* Collapse mobile aside menu on route change & set document title from route meta */
router.afterEach(to => {
  store.commit('asideMobileStateToggle', false)

  if (to.meta.title) {
    document.title = `${to.meta.title} — ${defaultDocumentTitle}`
  } else {
    document.title = defaultDocumentTitle
  }
})

Vue.config.productionTip = false
Vue.use(VCalendar, {
  componentPrefix: 'vc',
  screens: {
    tablet: '576px',
    laptop: '992px',
    desktop: '1200px'
  }
})

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
