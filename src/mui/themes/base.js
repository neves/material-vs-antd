export default {
  typography: {
    fontSize: 12,
    // remover Warning: Material-UI: you are using the deprecated typography
    // variants that will be removed in the next major release.
    // https://material-ui.com/style/typography/#strategies
    useNextVariants: true
  },
  props: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // The properties to apply
      disableRipple: true // No more ripple, on the whole application 💣!
    }
  }
}
