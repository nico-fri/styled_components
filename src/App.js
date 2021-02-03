import { ThemeProvider } from 'styled-components'
import GlobalStyle from './globalStyles'
import { theme } from './styles/Theme'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Error, Home, Login } from './pages'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/login' component={Login} />
          <Route path='/error' component={Error} />
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
