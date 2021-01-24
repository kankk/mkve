const path = require('path');

// vue.config.js
module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@layouts': path.resolve(__dirname, 'src/layouts'),
        '@styles': path.resolve(__dirname, 'src/assets/styles'),
      },
    },
  },
};
