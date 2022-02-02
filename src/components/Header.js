import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import catLogo from '../assets/cat-logo.png'

class Header extends Component {
  render() {
    return (
      <header>
        <NavLink to="/">
          <img src={catLogo} alt="logo for Cat Tinder" className="cat-logo"/>
        </NavLink>
        <div className="nav-links">
          <ul>
            <NavLink to="/catindex">Meet the Cats</NavLink>
          </ul>
          <ul>
            <NavLink to="/catnew">Add a Cat</NavLink>
          </ul>
          <ul>
            <a target='blank'href="https://www.aspca.org/adopt-pet/adoptable-cats-your-local-shelter" id="aspca">Adopt a Cat!</a>
          </ul>
        </div>
      </header>
    )
  }
}
export default Header
