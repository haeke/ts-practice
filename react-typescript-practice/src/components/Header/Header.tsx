import React from "react";
import { Link } from "react-router-dom";

const Header: React.SFC<{ headerTitle: string }> = ({ headerTitle }) => {
  return (
    <>
      <header style={{ height: 70 }}>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <Link to="/" className="navbar-brand text-muted">
            {headerTitle}
          </Link>
          <div className="navbar-collapse collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
