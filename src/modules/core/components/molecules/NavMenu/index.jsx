import { NavLink } from 'react-router-dom';
import './styles.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export function NavMenu() {
  return (
    <nav className="mvl-navbar">
      <div className="mvl-navbar--left">
        <NavLink className="mvl-navbar-item mlv-navbar__image" to="/">
          <img src="/images/marvel_logo.png" className="mvl-navbar__img" alt="compny logo"  />
        </NavLink>

        <div className="mvl-navbar__actions">
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/Characters" target="_bank">
            Characters
          </NavLink>
        </div>
      </div>

      <div className="mvl-navbar--right"></div>

      <div className="mvl-container-2 ">
      <div className="mvl-container-search-left-2">
          <NavLink className="mvl-navbar-item mvl-navbar-item--text-2" to="/Search" target="_bank" >
          <FontAwesomeIcon icon= {faMagnifyingGlass} className="search-container__icon-2" 
            aria-hidden="true"/> 
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
