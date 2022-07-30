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
      require('csswring')({
    removeAllComments: true
  })
    ]
  },
  pug: { pugRuntime: false }
};

exports.npm = {
  globals: {
    $: 'jquery',
    jQuery: 'jquery'
  }
}
