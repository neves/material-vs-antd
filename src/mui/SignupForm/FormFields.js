import { Checkbox, FormControlLabel } from '@material-ui/core'
import React from 'react'
import TextField from './TextField'

const FormFields = props => (
  <>
    <TextField type="text" label="Nome" />
    <TextField type="email" label="Email" />
    <FormControlLabel
      control={<Checkbox color="primary" />}
      label="Aceito os termos de uso"
    />
  </>
)

export default FormFields
