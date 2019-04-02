import React from 'react'
import LoginForm from './LoginForm'
import MuiThemeProviderDark from './themes/MuiThemeProviderDark'
import MuiThemeProviderLight from './themes/MuiThemeProviderLight'
import { CssBaseline, Grid } from '@material-ui/core'
import CenterLayout from './CenterLayout'

const MaterialUI = props => {
  return (
    <CenterLayout>
      <CssBaseline />
      <MuiThemeProviderLight>
        <LoginForm />
      </MuiThemeProviderLight>

      <br />

      <MuiThemeProviderDark>
        <LoginForm />
      </MuiThemeProviderDark>
    </CenterLayout>
  )
}

export default MaterialUI
