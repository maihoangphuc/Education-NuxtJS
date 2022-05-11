export default {
  // mode: 'universal',
  // target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Education',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/modal/v-modal.js',
    '@/plugins/g-component/g-component.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  env: {
    fbAPIKey: 'AIzaSyBm0e29rhh9BFcm110V7lAQXST85JZHkkE',
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    baseApiUrl: process.env.BASE_API_URL || 'https://courses-nuxtjs-default-rtdb.firebaseio.com',
  },

  // router: {
  //   middleware: 'log-console'
  // }

}
