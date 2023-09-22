import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
  <div className="container bg-success p-2">
      <nav className='w-25 mx-auto'>
      <Link
        to="/"
        onClick={() => handleLinkClick('/')}
        className={'text-white fs-5 ms-5 '+ (activeLink === "/" ? "active" : "")  }
      >
        Problem 1
      </Link>
      <Link
        to="/problem2"
        onClick={() => handleLinkClick('/problem2')}
        className={'text-white fs-5 ms-5 '+ (activeLink === "/problem2" ? "active" : "")  }
      >
        Problem 2
      </Link>
    </nav>
  </div>
  );
};

export default Navbar;