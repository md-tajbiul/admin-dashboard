import '../styles/globals.css';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Layout from '../src/layout/Layout'

const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#663399',
    },
    secondary: {
      main: '#F1F3F4',
    },
    background: {
      default: '#F1F3F4',
    },
    typography:{
      fontFamily: "Nunito Sans', sans-serif"
    }
  }
})

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
