import { NavLink } from "react-router-dom";
import "@/assets/styles/components/_nav-menu.scss";

export function NavMenu() {
  return (
    <nav className="mvl-navbar">
      <div className="mvl-navbar--left">
        <NavLink className="mvl-navbar-item mlv-navbar__image" href="#">
          <img
            src="/images/marvel_logo.png"
            className="mvl-navbar__img"
            alt="compny logo"
          />
        </NavLink>

        <div className="mvl-navbar__actions">
          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/characters">
            Characters
          </NavLink>

          {/* <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/">
            Home
          </NavLink>

          <NavLink className="mvl-navbar-item mvl-navbar-item--text" to="/sub-page">
            SubPage
          </NavLink> */}

        </div>
      </div>

      <div className="mvl-navbar--right">
 
      </div>
    </nav>
  );
}
