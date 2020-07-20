import Vue from 'vue'
import Vcalendar from 'v-calendar'
Vue.use(Vcalendar, {             // second is optional
  screens: {
    tablet: '576px',
    laptop: '992px',
    desktop: '1200px'
  }
})
