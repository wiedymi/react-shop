const path = require('path');
const { rewireWorkboxInject, defaultInjectConfig } = require('react-app-rewire-workbox');

module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: { '@': path.resolve(__dirname, 'src') }
  };

  return config;
};
