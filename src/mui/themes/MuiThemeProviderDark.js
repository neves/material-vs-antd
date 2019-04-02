import React from 'react'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import dark from './dark'

const theme = createMuiTheme(dark)

const MuiThemeProviderDark = props => (
  <MuiThemeProvider {...props} theme={theme} />
)

export default MuiThemeProviderDark
