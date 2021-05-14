import axios from 'axios'

export default {
  generate: {
    async routes () {
      try {
        let response = await axios.get('https://dev.betting-sites.me.uk/wp-json/wp/v2/posts') 
        return response.data.map((post) => ({
          route: 'blog/' + post.slug,
          payload: post
        }))
      } catch (error) {
        error({ statusCode: 404, message: error });
      }
    }
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],

  /*
  ** axios configuration
  */
  axios: {
    baseURL: 'https://jsonplaceholder.typicode.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
