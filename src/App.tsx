import { Switch, Route } from 'react-router'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Home from './pages/Home'

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/log" component={Login} />
    <Route exact path="/reg" component={Register} />
  </Switch>
)

export default App
