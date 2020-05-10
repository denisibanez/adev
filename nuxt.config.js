
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    scripts: [
      { src: 'js/jquery.js', type: 'text/javascript', body: true },
      { src: 'js/popper.min.js', type: 'text/javascript', body: true },
      { src: 'js/bootstrap.min.js', type: 'text/javascript', body: true },
      { src: 'js/owl.js', type: 'text/javascript', body: true },
      { src: 'js/wow.js', type: 'text/javascript', body: true },
      { src: 'js/validation.js', type: 'text/javascript', body: true },
      { src: 'js/jquery.fancybox.js', type: 'text/javascript', body: true },
      { src: 'js/appear.js', type: 'text/javascript', body: true },
      { src: 'js/circle-progress.js', type: 'text/javascript', body: true },
      { src: 'js/jquery.countTo.js', type: 'text/javascript', body: true },
      { src: 'js/scrollbar.js', type: 'text/javascript', body: true },
      { src: 'js/nav-tool.js', type: 'text/javascript', body: true },
      { src: 'js/jquery.paroller.min.js', type: 'text/javascript', body: true },
      { src: 'js/tilt.jquery.js', type: 'text/javascript', body: true },
      { src: 'js/script.js', type: 'text/javascript', body: true },
    ]
  },
  webfontloader: {
    google: {
      families: ['Ubuntu:300,300i,400,400i,500,500i,700,700i'] //Loads Lato font with weights 400 and 700
    }
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
   './assets/css/font-awesome-all.css',
   './assets/css/flaticon.css',
   './assets/css/bootstrap.css',
   './assets/css/owl.css',
   './assets/css/jquery.fancybox.min.css',
   './assets/css/animate.css',
   './assets/css/imagebg.css',
   './assets/css/style.css',
   './assets/css/responsive.css',
  ],
  render: {
    bundleRenderer: {
      shouldPreload: (file, type) => {
        return ['script', 'style'].includes(type)
      }
      
    }
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-webfontloader'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      [
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/,
          loader: 'url-loader',
          query: {
            limit: 1000, // 1kB
            name: 'img/[name].[hash:7].[ext]'
          }
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
          loader: 'url-loader',
          query: {
            limit: 1000, // 1kB
            name: 'fonts/[name].[hash:7].[ext]'
          }
        }
      ]
    }
  }
}
