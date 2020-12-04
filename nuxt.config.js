export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'jonathan',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['~/assets/fonts/css/all.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],
  axios: {},
  build: {},
  auth: {
    strategies: {
      google: {
        clientId: process.env.CLIENT_ID,
        scope: ['profile', 'email'],
        codeChallengeMethod: '',
      },
    },
  },
}
