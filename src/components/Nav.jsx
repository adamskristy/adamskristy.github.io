import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar is-primary">
      <div className="navbar-brand title">
        <Link to="/">Kristy A.</Link>
      </div>
      <div className="navbar-menu">
        <div className="navbar-end">
          <Link to="/about">
            <span className="navbar-item mt-4 button is-primary">About</span>
          </Link>
          <Link to="/projects">
            <span className="navbar-item mt-4 button is-primary">Projects</span>
          </Link>
          <Link to="/resume">
            <span className="navbar-item mt-4 button is-primary">Resume</span>
          </Link>
          <Link to="/contact">
            <span className="navbar-item mt-4 button is-primary">Contact</span>
          </Link>
        </div>
        <div className="navbar-end">
          <a className="navbar-item" href="#">
            LinkedIn
          </a>
          <a className="navbar-item" href="#">
            Twitter
          </a>
          <a className="navbar-item" href="#">
            GitHub
          </a>
          <a className="navbar-item" href="#">
            Trello
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
