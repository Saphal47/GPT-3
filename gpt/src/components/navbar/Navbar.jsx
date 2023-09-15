import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';
import { BrowserRouter,Link } from 'react-router-dom';

//This is fxn component which will render all the navLinks
//Caution: used ()=> () not ()=> {}
const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT3?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
</>
)


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="gpt3__navbar-links_container">
          <Menu/>
        </div>
      </div>
      <BrowserRouter>
        <div className="gpt3__navbar-sign">
          <Link to="https://auth0.openai.com/u/login/identifier?state=hKFo2SBYRW5tNmx6MVdHMk5RMjhVLWJLWGNfcTltMjRqQ1ZXUqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIE5kNnFSWXJIN2pYWVAyckROdjVtQ3ItdzdMeGdBN0d4o2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q"> <p>Sign in</p>  </Link>
          <Link to="https://auth0.openai.com/u/signup/identifier?state=hKFo2SBwSGs5QW00aTJ4cS11OEZlZlZYUlR1RU84aVFvTmhHZKFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIEhkNy04cDVGeXV6VjVuV3hCMVhXUGVLX0FiRVowYjdio2NpZNkgRFJpdnNubTJNdTQyVDNLT3BxZHR3QjNOWXZpSFl6d0Q"> <button type="button">Sign up</button> </Link>
        </div>
      </BrowserRouter>
      
      {/* For Mobile version */}
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
          
        {toggleMenu && (//Visiblity for mobile devices
        <div className="gpt3__navbar-menu_container scale-up-center">
          <div className="gpt3__navbar-menu_container-links">
            <Menu/>
          </div>
          <div className="gpt3__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
