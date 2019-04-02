import merge from 'deepmerge'
import base from './base'

export default merge(base, {
  palette: {
    type: 'dark',
    primary: {
      main: '#9FA8DA'
    }
  }
})
