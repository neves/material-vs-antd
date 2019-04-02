import { TextField } from '@material-ui/core'
import React from 'react'

const defaultProps = {
  margin: 'normal',
  variant: 'outlined',
  fullWidth: true
}

export default props => <TextField {...defaultProps} {...props} />
