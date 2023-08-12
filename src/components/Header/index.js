import {Link} from 'react-router-dom'

import Context from '../../Context/context'

import './index.css'

const Header = () => (
  <Context.Consumer>
    {value => {
      const {tabId, changeHomeId, changeAboutId, showVaccination} = value

      const onClickHomeTab = () => {
        changeHomeId()
      }

      const onClickAboutTab = () => {
        changeAboutId()
      }

      const vaccine = showVaccination ? '' : 'display'
      const color = tabId === 'home' ? 'homeColor' : ''
      const aboutColor = tabId === 'about' ? 'aboutColor' : ''

      return (
        <nav className="HeaderContainer">
          <Link to="/" className="link-nav">
            <h1 className="header">
              COVID19<span className="india">INDIA</span>
            </h1>
          </Link>
          <ul className="list-container">
            <Link to="/" className="link-nav">
              <li className={`homeText ${color}`} onClick={onClickHomeTab}>
                Home
              </li>
            </Link>
            <li className={`vaccineText ${vaccine}`}>Vaccination</li>

            <Link to="/about" className="link-nav">
              <li
                className={`aboutText ${aboutColor}`}
                onClick={onClickAboutTab}
              >
                About
              </li>
            </Link>
          </ul>
        </nav>
      )
    }}
  </Context.Consumer>
)

export default Header
