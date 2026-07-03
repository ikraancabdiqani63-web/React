import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>

      <NavLink to="/apply">Apply</NavLink>

      <NavLink to="/review">Review</NavLink>

      <NavLink to="/submit">Submit</NavLink>
    </nav>
  );
}

export default Navbar;
