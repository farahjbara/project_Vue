import Vue from 'vue'
import Vcalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css';
Vue.use(Vcalendar, {             // second is optional
  componentPrefix: 'vc',
  screens: {
    tablet: '576px',
    laptop: '992px',
    desktop: '1200px'
  }
})
