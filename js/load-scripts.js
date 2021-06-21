(function () {
  const _EXT_SCRIPTS = {
    'materialDesign': {
      'cdn': {
        'src': 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.js'
      },
      'vendor': {
        'src': '/vendor/material/material-components-web.min.js'
      }
    },
    'vueJs': {
      'cdn': {
        'src': 'https://cdn.jsdelivr.net/npm/vue'
      },
      'vendor': {
        'src': '/vendor/vuejs/vue.js'
      }
    },
  };

  for (const [name, attrs] of Object.entries(_EXT_SCRIPTS)) {
    ez.load(document.body, 'script', attrs['cdn'], attrs['vendor']);
  }
})();
