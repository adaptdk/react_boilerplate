import React from "react";
import { Link } from "react-router-dom";

const Header = (): JSX.Element => (
  <header className="header">
    <Link to="/">FrontPage</Link>
    <Link to="/notfound">Not Found</Link>
  </header>
);

export default Header;
