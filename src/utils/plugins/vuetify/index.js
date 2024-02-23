// Vuetify plugins
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

export default createVuetify( {
  components,
  directives,
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: '#1e2b34',
        },
      },
    },
  },
} )
