import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import base from './base'

const theme = createMuiTheme(base)

const MuiThemeProviderLight = props => (
  <MuiThemeProvider {...props} theme={theme} />
)

export default MuiThemeProviderLight
