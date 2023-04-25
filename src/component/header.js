import hamburgerMenu from "../utility/hamburger-menu"
import Logo from "./logo";
import { Link } from "react-router-dom";
export default function HeaderComponent({ handleClick }) {
  const menuManipulator = hamburgerMenu();
  return (
    <header>
      <div className="hamburger-menu-section">
        <button type="button" className="menu-btn" onClick={menuManipulator.showMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>menu</title><path d="M3,8V7H20V8H3M20,12V13H3V12H20M3,17H20V18H3V17Z" /></svg>
        </button>
      </div>
      <div className="logo-section">
        <Logo />
      </div>
      <div className="hide-nav-menu">
        <div className="close-menu">
          <button className="close-menu-btn" onClick={menuManipulator.hideMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.46,12L19,17.54V19H17.54L12,13.46L6.46,19H5V17.54L10.54,12L5,6.46V5H6.46L12,10.54L17.54,5H19V6.46L13.46,12Z" /></svg>
          </button>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/" className="link home-link" onClick={menuManipulator.hideMenu}>Home</Link>
            </li>
            <li>
              <Link to="about" className="link about-link" onClick={menuManipulator.hideMenu}>About us</Link>
            </li>
            <li>
              <Link to="products" className="link product-link" onClick={menuManipulator.hideMenu}>Products</Link>
            </li>
            <li>
              <Link to="faq" className="link faq-link" onClick={menuManipulator.hideMenu}>Faqs</Link>
            </li>
            <li>
              <Link to="contact" className="link contact-link" onClick={menuManipulator.hideMenu}>Contact us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="btn-container">
        <button className="search-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9.5,4C13.09,4 16,6.91 16,10.5C16,12.12 15.41,13.6 14.43,14.73L20.08,20.38L19.37,21.09L13.72,15.44C12.59,16.41 11.11,17 9.5,17C5.91,17 3,14.09 3,10.5C3,6.91 5.91,4 9.5,4M9.5,5C6.46,5 4,7.46 4,10.5C4,13.54 6.46,16 9.5,16C12.54,16 15,13.54 15,10.5C15,7.46 12.54,5 9.5,5Z" /></svg>
        </button>
        <div>
          <button className="shopping-bag-btn" onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5,7H8V5L10,3H13L15,5V7H18C19.66,7 21,8.34 21,10V18C21,19.66 19.66,21 18,21H5C3.34,21 2,19.66 2,18V10C2,8.34 3.34,7 5,7M10.41,4L9,5.41V7H14V5.41L12.59,4H10.41M5,8C3.9,8 3,8.9 3,10V18C3,19.1 3.9,20 5,20H18C19.1,20 20,19.1 20,18V10C20,8.9 19.1,8 18,8H5Z" /></svg>
          </button>
          <span></span>
        </div>
      </div>
    </header>
  )
}