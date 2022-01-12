module.exports = {
    purge: ['./src/**/*.svelte', './src/**/*.css'],
    darkMode: 'media',
    theme: {
      extend:  {
        colors: {
          'winter': 'rgb(192, 155, 138)',
          'grün' : '#4ADE80',
        },
        spacing: {
          'zwei' : '-10px',
        },
        fontFamily: {
          'balestic': 'balestic',
          'din': 'dinalternate',
        }
      },
    },
  }