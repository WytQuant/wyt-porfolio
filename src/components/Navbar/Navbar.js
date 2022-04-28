import { useState } from 'react';
import './Navbar.css';
import { FaStream, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [openNavMobile, setOpenNavMobile] = useState(false);

  const handleClicktoOpenNavMobile = () => {
    setOpenNavMobile(!openNavMobile);
  };

  return (
    <nav className='navbar-section'>
      <div className='logo'>
        <img src='./images/blockchain-icon.png' alt='icon' />
        <h1>Wyt</h1>
      </div>
      <div className={openNavMobile ? 'nav-item active' : 'nav-item'}>
        <a className='nav-link' href='#main-section'>
          About
        </a>
        <a className='nav-link' href='#contact'>
          Contact
        </a>
        <a className='my-project' href='#project'>
          Project
        </a>
      </div>
      <div className='nav-mobile' onClick={handleClicktoOpenNavMobile}>
        {openNavMobile ? <FaTimes /> : <FaStream />}
      </div>
    </nav>
  );
};

export default Navbar;
