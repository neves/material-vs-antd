import { CssBaseline } from '@material-ui/core'
import React from 'react'
import CenterLayout from './CenterLayout'
import LoginForm from './LoginForm'
import MuiThemeProviderDark from './themes/MuiThemeProviderDark'
import MuiThemeProviderLight from './themes/MuiThemeProviderLight'

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
