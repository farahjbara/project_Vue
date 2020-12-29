
export default {

  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

    ],
    script: [
        { src:'/jquery.min.js' },
        { src:'/semantic.min.js' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/semantic.min.css',
    '@/assets/css/quasar.min.css'
  ],
  /*
  ** Plugins to load before mountin the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
   { src: '~plugins/v-calendar', ssr: false }
  ],
  router : {
    linkActiveClass : 'active'
  },
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    //'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    //'@nuxtjs/pwa',
    'cookie-universal-nuxt'
  //  '@nuxtjs/auth'
    // Doc: https://github.com/nuxt/content
  //  '@nuxt/content',
  ],
  /* 
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  baseURL: 'https://127.0.0.1:8000/api'
},

   
  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
//  content: {},
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  server: {

  }
}
