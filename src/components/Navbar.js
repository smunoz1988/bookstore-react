import { Link, NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div>
      <h1>Bookstore CMS</h1>
      <Link to="/" className="navItems">Books</Link>
      <NavLink to="/Categories" className="navItems">Categories</NavLink>
    </div>
    <p>aqui va el dibujo</p>
  </nav>
);

export default Navbar;
