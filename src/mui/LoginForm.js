import {
  Button,
  Card,
  CardActions,
  CardContent,
  Checkbox,
  FormControlLabel,
  TextField
} from '@material-ui/core'
import React from 'react'

const LoginForm = props => {
  return (
    <Card>
      <CardContent>
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
      </CardContent>
      <CardActions>
        <Button variant="contained" color="primary" fullWidth>
          Enviar
        </Button>
      </CardActions>
    </Card>
  )
}

export default LoginForm
