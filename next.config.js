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
      '/about': { page: '/about' },
    };
  },
  trailingSlash: true,
  assetPrefix: !debug ? '/ProfileProject/' : '',
});
