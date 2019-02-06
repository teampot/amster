module.exports = {
  webpack: function(config) {
    config.externals.push('fs');
    return config;
  }
}