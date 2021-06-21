(function () {
  const _EXT_STYLESHEETS = {
    'materialDesign': {
      'cdn': {
        'href': 'https://unpkg.com/material-components-web@latest/dist/material-components-web.min.css',
        'integrity': 'sha256-8KkxzLA0cxr6in76Tdg57ErbFDwNww6SGexCFZEHeBs=',
        'crossorigin': 'anonymous'
      },
      'vendor': {
        'href': '/vendor/material/material-components-web.min.css'
      }
    },
    'materialIcon': {
      'cdn': {
        'href': 'https://fonts.googleapis.com/icon?family=Material+Icons',
        'integrity': 'sha256-KioJKghPa0QXFiiXrdOmgAbIVw3jhsg3EHU/dTkbkOY=',
        'crossorigin': 'anonymous'
      },
      'vendor': {
        'href': '/vendor/material/icon.css'
      }
    },
  };

  for (const [name, attrs] of Object.entries(_EXT_STYLESHEETS)) {
    ez.load(document.head, 'link', attrs['cdn'], attrs['vendor']);
  }
})();
