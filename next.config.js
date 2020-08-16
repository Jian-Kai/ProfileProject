const withImage = require('next-images');
const path = require('path');

const debug = process.env.NODE_ENV !== 'production';

module.exports = withImage({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/index' },
      '/Experience': { page: '/experience' },
    };
  },
  trailingSlash: false,
  assetPrefix: !debug ? '/ProfileProject/' : '',
});
