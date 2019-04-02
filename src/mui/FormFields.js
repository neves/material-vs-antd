import { Checkbox, FormControlLabel, TextField } from '@material-ui/core'
import React from 'react'

const FormFields = props => (
  <>
    <TextField
      margin="normal"
      type="text"
      variant="outlined"
      label="Nome"
      fullWidth
    />
    <TextField
      margin="normal"
      type="email"
      variant="outlined"
      label="Email"
      fullWidth
    />
    <FormControlLabel
      control={<Checkbox color="primary" />}
      label="Aceito os termos de uso"
    />
  </>
)

export default FormFields
