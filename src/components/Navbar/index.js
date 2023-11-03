import { Link } from 'react-router-dom';
import './style.css';

function Navbar() {
  return (
    <>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/contact">Contact</Link>
    </>
  )
}

export default Navbar;