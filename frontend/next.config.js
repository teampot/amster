module.exports = {
  webpack: function(config) {
    config.externals.push('fs');
    return config;
  },
  serverRuntimeConfig: { // Will only be available on the server side
    mySecret: 'secret'
  },
  publicRuntimeConfig: { // Will be available on both server and client
    staticFolder: '/static',
    mySecret: process.env.MY_SECRET // Pass through env variables
  }
}