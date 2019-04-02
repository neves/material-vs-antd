import React from 'react'
import { Grid } from '@material-ui/core'

const CenterLayout = ({ children, ...props }) => (
  <Grid
    container
    justify="center"
    alignItems="center"
    style={{ minHeight: '100vh' }}
    {...props}
  >
    <Grid item xs={12} sm={8} md={5} lg={4} xl={3}>
      {children}
    </Grid>
  </Grid>
)

export default CenterLayout
