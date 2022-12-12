import { NavLink, Link } from 'react-router-dom';
import './styles.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


export function NavMenu() {
  return (
    <nav className="mvl-navbar">
      <div className="mvl-navbar--left">
        <NavLink className="mvl-navbar-item mlv-navbar__image" href="#">
          <img src="/images/marvel_logo.png" className="mvl-navbar__img" alt="compny logo" />
        </NavLink>

        <div className="mvl-navbar__actions">
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/">
            Characters
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/">
            Comics
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/">
            Creators
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/">
            Events
          </NavLink>
          <Link className="mvl-navbar-item mvl-navbar-item--text" href="ank" target="_blank">
            Series
          </Link>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/">
            Stories
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="search-container__icon"/>
          </NavLink>
        </div>
        
      </div>

      <div className="mvl-navbar--right"></div>
    </nav>
  );
}
