module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/ocue'
  : '/ocue',

  transpileDependencies: [
    'vuetify'
  ]
}