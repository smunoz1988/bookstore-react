import { Link, NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaUser } from 'react-icons/fa';

const Navbar = () => (
  <nav>
    <div className="navTitle">
      <h1>Bookstore CMS</h1>
      <Link to="/" className="navItems">BOOKS</Link>
      <NavLink to="/Categories" className="navItems categorieLink">CATEGORIES</NavLink>
    </div>
    <FaUser className="userIcon" />
  </nav>
);

export default Navbar;
