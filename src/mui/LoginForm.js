import { Button, Card, CardActions, CardContent } from '@material-ui/core'
import React from 'react'
import FormFields from './FormFields'

const LoginForm = props => {
  return (
    <Card>
      <CardContent>
        <FormFields />
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
