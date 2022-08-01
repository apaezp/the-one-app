import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>

          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            TheOne
            <i className="fa-solid fa-ring"></i>
          </Link>

          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/pages/Got/HomeGot'
                className='nav-links'
                onClick={click}
              >
                Game of Thrones
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/pages/Lotr/HomeLotr'
                className='nav-links'
                onClick={click}
              >
                Lord Of The Rings
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to='/pages/HarryPotter/HomeHP'
                className='nav-links'
                onClick={click}
              >
                Harry Potter
              </Link>
            </li>
          </ul>
          <Link to='/pages/SignUp'>
          {button && <Button buttonStyle='btn--outline' onClick={click}>SIGN UP</Button>}
          </Link>

        </div>
      </nav>
    </>
  );
}

export default Navbar;