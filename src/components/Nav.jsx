import { Link } from "react-router-dom";
import kLogo from "../assets/kristy.svg";

function Nav() {
  return (
    <nav className="navbar is-primary">
      <div className="navbar-brand title">
        <Link to="/">
          <figure className="image is-96x96 py-3 ml-3">
            <img src={kLogo} className="logo" alt="kristy adams logo" />
          </figure>
        </Link>
      </div>
      <div className="navbar-menu mr-5">
        <div className="navbar-end">
          <Link to="/about">
            <div className="navbar-item  button is-primary is-large mt-5 px-6">
              About
            </div>
          </Link>
          <Link to="/projects">
            <div className="navbar-item  button is-primary is-large mt-5 px-6">
              Projects
            </div>
          </Link>
          <Link to="/resume">
            <div className="navbar-item  button is-primary is-large mt-5 px-6">
              Resume
            </div>
          </Link>
          <Link to="/contact">
            <div className="navbar-item  button is-primary is-large mt-5 px-6">
              Contact
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
