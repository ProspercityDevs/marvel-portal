import { NavLink, Link } from 'react-router-dom';
import './styles.scss';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export function NavMenu() {
  return (
    <nav className="mvl-navbar">
      <div className="mvl-navbar--left" href="localhost:3000">
        <NavLink className="mvl-navbar-item mlv-navbar__image" to="/">
          <img src="/images/marvel_logo.png" className="mvl-navbar__img" alt="compny logo"  />
        </NavLink>

        <div className="mvl-navbar__actions">
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/" target="_blank">
            Characters
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/comics" target="_blank">
            Comics
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/creators" target="_blank">
            Creators
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/events" target="_blank">
            Events
          </NavLink>
          <Link className="mvl-navbar-item mvl-navbar-item--text" to="/series" target="_blank">
            Series
          </Link>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/stories" target="_blank">
            Stories
          </NavLink>

        </div>
        
      </div>

      <div className="mvl-navbar--right">
      <NavLink className="mv1-search-container" to="/Search" target="_blank" >
          <FontAwesomeIcon icon= {faMagnifyingGlass} className="search-container__icon-2" 
            aria-hidden="true"/> 
          </NavLink>
      </div>
    </nav>
  );
}
