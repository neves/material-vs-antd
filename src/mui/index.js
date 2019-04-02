import React from 'react'
import LoginForm from './LoginForm'
import MuiThemeProviderDark from './themes/MuiThemeProviderDark'
import MuiThemeProviderLight from './themes/MuiThemeProviderLight'
import { CssBaseline, Grid } from '@material-ui/core'

const MaterialUI = props => {
  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
        <CssBaseline />
        <MuiThemeProviderLight>
          <LoginForm />
        </MuiThemeProviderLight>

        <br />

        <MuiThemeProviderDark>
          <LoginForm />
        </MuiThemeProviderDark>
      </Grid>
    </Grid>
  )
}

export default MaterialUI
