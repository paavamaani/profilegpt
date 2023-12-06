import React from 'react';
import { Link } from 'react-router-dom';

import { HeaderData } from '../mock/HeaderData';

const Header = () => {
  const { title, navItems } = HeaderData;

  return (
    <nav className='px-12 py-4 top-0 sticky flex items-center justify-between bg-custom-black text-white z-10'>
      <p className='text-3xl'> {title} </p>
      <ul className='mr-2 flex justify-between'>
        {navItems.map((navItem, index) => {
          return (
            <li
              key={index}
              className='px-4 py-2 hover:bg-slate-50 hover:text-custom-black'
            >
              <Link to={navItem.url}> {navItem.text} </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Header;
