import { Switch, Route } from 'react-router'

import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import RegisterComplete from './pages/auth/RegisterComplete'
import Home from './pages/Home'
import Header from './components/Header'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/log" component={Login} />
      <Route exact path="/reg" component={Register} />
      <Route exact path="/reg/success" component={RegisterComplete} />
    </Switch>
  </>
)

export default App
