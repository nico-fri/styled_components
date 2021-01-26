import { ThemeProvider } from 'styled-components'
import './App.css'
import Feature from './components/Feature/Feature'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import { theme } from './styles/Theme'
import { featureOne, featureTwo, numberOne } from './data/data'
import Number from './components/Number/Number'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error from './pages/Error/Error'
import { Wrapper } from './styles/Container'

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path='/'>
            <Navbar />
            <Hero />
            <Wrapper id='features'>
              <Feature {...featureOne} />
            </Wrapper>
            <Wrapper id='numbers'>
              <Number {...numberOne} />
            </Wrapper>
            <Wrapper id='plattform'>
              <Feature {...featureTwo} />
            </Wrapper>
            <Footer />
          </Route>
          <Route path='/error'>
            <Error />
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  )
}

export default App
