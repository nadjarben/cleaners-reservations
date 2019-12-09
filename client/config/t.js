module.exports = {
    staticFileGlobs: [
      "build/static/css/*.css",
      "build/static/js/*.js",
      "build/200.html",
      "build/index.html"
    ],
    stripPrefix: "build",
    publicPath: ".",
    runtimeCaching: [{
      urlPattern: /images/,
      handler: "fastest"
    }],
    navigateFallback: '/200.html' // use shell here if you have one
  };