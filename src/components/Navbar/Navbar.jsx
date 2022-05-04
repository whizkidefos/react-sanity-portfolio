import React from 'react';

import { images } from '../../constants';

const Navbar = () => {
  return (
    <nav>
        <div className="app__logo">
            <img src={images.logo} alt="app logo" />
        </div>
    </nav>
  )
}

export default Navbar;