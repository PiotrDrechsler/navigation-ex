import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/shop">Online Store</NavLink>
    </nav>
  );
}

export default Nav;
