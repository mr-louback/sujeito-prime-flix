import { Link } from 'react-router-dom';
import {
  BiHomeAlt2,
  BiSolidContact
} from 'react-icons/bi';
import {
  SiAboutdotme
} from 'react-icons/si';
import './style.css';

function Navbar() {
  return (
    <>
      <h1>LogoMarca</h1>
      <div>
        <Link to="/"><BiHomeAlt2 /></Link>
        <Link to="/about"><SiAboutdotme /></Link>
        <Link to="/contact"><BiSolidContact /></Link>
      </div>
    </>
  )
}

export default Navbar;