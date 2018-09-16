const Jarvis = require('webpack-jarvis');

module.exports = function (moduleOptions) {
  // Only run in dev
  if (!this.options.dev) {
    return;
  }
  this.extendBuild((config, { isServer }) => {
    // Ignore SSR bundle
    if (isServer) {
      return;
    }
    const options = Object.assign({}, this.options.jarvisDashboard, moduleOptions);
    config.plugins.push(new Jarvis(options));
  })
};
