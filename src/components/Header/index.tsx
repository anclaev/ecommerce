import { useEffect } from 'react'
import { Navbar, Icon, NavItem } from 'react-materialize'
import { NavLink } from 'react-router-dom'
import { Modal } from 'materialize-css'

const Header = () => {
  useEffect(() => {
    Modal.init(document.querySelectorAll('.modal'))
  })

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

      <NavItem className="modal-trigger" href="#modal1">
        Show Modal
      </NavItem>

      <div id="modal1" className="modal">
        <div className="modal-content"></div>
        <div className="modal-footer">
          <a
            href="#!"
            className="modal-close waves-effect waves-green btn-flat"
          >
            Agree
          </a>
        </div>
      </div>
    </Navbar>
  )
}

export default Header
