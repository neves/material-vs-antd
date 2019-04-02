import { CssBaseline } from '@material-ui/core'
import React from 'react'
import CenterLayout from './CenterLayout'
import SignupForm from './SignupForm'
import MuiThemeProviderDark from './themes/MuiThemeProviderDark'
import MuiThemeProviderLight from './themes/MuiThemeProviderLight'

const MaterialUI = props => {
  return (
    <CenterLayout>
      <CssBaseline />
      <MuiThemeProviderLight>
        <SignupForm />
      </MuiThemeProviderLight>

      <br />

      <MuiThemeProviderDark>
        <SignupForm />
      </MuiThemeProviderDark>
    </CenterLayout>
  )
}

export default MaterialUI
