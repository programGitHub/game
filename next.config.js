const path = require('path');

module.exports = {
  env: {
    siteName: 'TheGame',
    siteUrl: 'https://game.now.sh',
  },
  pageExtensions: ['js', 'jsx'],
  webpack: (config) => {
    config.resolve.alias['pages'] = path.join(
      path.resolve(__dirname),
      './pages'
    );

    config.resolve.alias['public'] = path.join(
      path.resolve(__dirname),
      './public'
    );

    config.resolve.alias['src'] = path.join(path.resolve(__dirname), './src');

    return config;
  },
};
