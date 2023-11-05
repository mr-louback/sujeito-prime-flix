import { Link } from 'react-router-dom';
// import {
//   BiHomeAlt2,
//   BiSolidContact
// } from 'react-icons/bi';
// import {
//   SiAboutdotme
// } from 'react-icons/si';
import './style.css';

function Header() {
  return (
    <>
      <header>
        <Link className='logo' to="/">Prime Flix</Link>
        {/* <Link to="/about">About <SiAboutdotme /> </Link> */}
        {/* <Link to="/contact">Contact <BiSolidContact /> </Link> */}
        <Link className='favorites' to="/favorites">Favoritos </Link>
      </header>
    </>
  )
}

export default Header;