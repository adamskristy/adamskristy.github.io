import { Link } from "react-router-dom";
import kLogo from "../assets/kristy.svg";

function Nav() {
  return (
    <nav className="navbar is-primary">
      <div className="navbar-brand title">
        <Link to="/">
          <figure className="image is-96x96 py-3 ml-3">
            <img src={kLogo} className="logo" alt="kristy logo" />
          </figure>
        </Link>
      </div>
      <div className="navbar-menu mr-5">
        <div className="navbar-end">
          <Link to="/about">
            <span className="navbar-item  button is-primary is-large mt-5 px-6">
              About
            </span>
          </Link>
          <Link to="/projects">
            <span className="navbar-item  button is-primary is-large mt-5 px-6">
              Projects
            </span>
          </Link>
          <Link to="/resume">
            <span className="navbar-item  button is-primary is-large mt-5 px-6">
              Resume
            </span>
          </Link>
          <Link to="/contact">
            <span className="navbar-item  button is-primary is-large mt-5 px-6">
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
