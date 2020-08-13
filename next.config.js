const path = require('path');

const debug = process.env.NODE_ENV !== 'production';

module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/index',
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  assetPrefix: !debug ? '/ProfileProject/' : '',
};
