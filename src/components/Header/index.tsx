import { Navbar, Icon } from 'react-materialize'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <Navbar
      className="header"
      alignLinks="left"
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: 'left',
        inDuration: 250,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <NavLink to="/">
        Home
        <Icon left>home</Icon>
      </NavLink>

      <NavLink to="/">
        Username
        <Icon left>person</Icon>
      </NavLink>
      <NavLink to="reg">
        Sign Up
        <Icon left>accessibility_new</Icon>
      </NavLink>
      <NavLink to="/log">
        Login
        <Icon left>login</Icon>
      </NavLink>
    </Navbar>
  )
}

export default Header
