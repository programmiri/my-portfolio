// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: { joinTo: {
      'app.css': /^app/
    }
  }
};

exports.plugins = {
  babel: {
    presets: ['latest']
  },
  sass: {
    sourceMapEmbed: true,
    options: {
      includePaths: ['./node_modules/bootstrap/scss/'],
      precision: 8
    }
  },
  postcss: {
    processors: [
      require('autoprefixer')(['last 3 versions']),
    ]
  },
  pug: { pugRuntime: require('path').resolve('.', 'vendor', 'pug_runtime.js') }
};

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery'
  }
}
