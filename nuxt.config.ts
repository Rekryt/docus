import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: ['@nuxt-themes/typography'],

  modules: [
    '@nuxthq/studio',
    'pinceau/nuxt',
    '@nuxtjs/color-mode',
    '@nuxt/content',
    '@vueuse/nuxt',
    resolve('./app/module')
  ],

  css: [
    resolve('./assets/css/main.css')
  ],

  components: [
    {
      prefix: '',
      path: resolve('./components/app'),
      global: true
    },
    {
      prefix: '',
      path: resolve('./components/docs'),
      global: true
    },
    {
      prefix: '',
      path: resolve('./components/content'),
      global: true
    },
    {
      prefix: '',
      path: resolve('./components/icons'),
      global: true
    },
    {
      prefix: '',
      path: resolve('./components/landing'),
      global: true
    }
  ],

  pinceau: {
    configFileName: 'tokens.config'
  },

  content: {
    documentDriven: true,
    highlight: {
      theme: 'one-dark-pro',
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    },
    navigation: {
      fields: ['icon', 'titleTemplate']
    }
  },

  colorMode: {
    classSuffix: '',
    dataValue: 'theme'
  }
})
