/* ===== App Dependencies ===== */
import React from "react";
import { NavLink } from "react-router-dom";

/* ========= Component ============= */
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isHamburgerOpen: false,
    };
  }
  toggleHamburger = () => {
    this.setState((prevState) => ({
      isHamburgerOpen: !prevState.isHamburgerOpen,
    }));
  };

  render() {
    return (
      <header className="header">
        <section className="header__topbar">
          <h1 className="master__heading">{this.props.appName}</h1>
          <button
            className={`hamburger ${
              this.state.isHamburgerOpen ? "hamburger-rotates" : "hamburger"
            }`}
            onClick={this.toggleHamburger}
          >
            <span className="hamburger__bar"></span>
            <span className="hamburger__bar"></span>
            <span className="hamburger__bar"></span>
          </button>
        </section>

        <nav className="header__nav">
          <ul
            className={`header__nav_ul ${
              this.state.isHamburgerOpen ? "nav-open" : "header__nav_ul"
            }`}
          >
            <li className="header__nav_listitem">
              <NavLink
                className="header__nav_link"
                to="/"
                activeClassName="is-active"
                exact={true}
              >
                Appointments
              </NavLink>
            </li>
            <li className="header__nav_listitem">
              <NavLink
                className="header__nav_link"
                to="/settings"
                activeClassName="is-active"
              >
                Settings
              </NavLink>
            </li>
            <li className="header__nav_listitem">
              <NavLink
                className="header__nav_link"
                to="/help"
                activeClassName="is-active"
              >
                Help
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
export default Header;
