import { NavLink } from 'react-router-dom';
import './styles.scss';

export function NavMenu() {
  return (
    <nav className="mvl-navbar">
      <div className="mvl-navbar--left">
        <NavLink className="mvl-navbar-item mlv-navbar__image" to="/" href="#">
          <img src="/images/marvel_logo.png" className="mvl-navbar__img" alt="compny logo" />
        </NavLink>

        <div className="mvl-navbar__actions">
          <NavLink
            className="mvl-navbar-item mvl-navbar-item--text"
            to="/characters"
            target="_blank">
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
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/series" target="_blank">
            Series
          </NavLink>
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/stories" target="_blank">
            Stories
          </NavLink>
        </div>
      </div>

      <div className="mvl-navbar--right"></div>
    </nav>
  );
}
