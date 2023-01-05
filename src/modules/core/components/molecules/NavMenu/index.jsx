import { NavLink, Link } from 'react-router-dom';
import './styles.scss';

export function NavMenu() {
  return (
    <nav className="mvl-navbar">
      <div className="mvl-navbar--left" >
        <NavLink className="mvl-navbar-item mlv-navbar__image" to="/">
          <img src="/images/marvel_logo.png" className="mvl-navbar__img" alt="compny logo"  />
        </NavLink>

        <div className="mvl-navbar__actions">
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/" >
            Characters
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/comics">
            Comics
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/creators" >
            Creators
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/events" >
            Events
          </NavLink>
          <Link className="mvl-navbar-item mvl-navbar-item--text" to="/series" >
            Series
          </Link>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/stories">
            Stories
          </NavLink>

        </div>
        
      </div>
    </nav>
  );
}
