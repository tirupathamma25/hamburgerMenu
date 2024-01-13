import {Switch, Route, Redirect} from 'react-router-dom'
import NotFound from './components/NotFound'
import Home from './components/Home'
import About from './components/About'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route path="/not-found" component={NotFound} />
      <Redirect to="not-found" />
    </Switch>
  </div>
)

export default App
