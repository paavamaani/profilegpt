import React from 'react';

import { FooterData } from '../mock/FooterData';

const Footer = () => {
  const { email, copyright, profiles } = FooterData;

  return (
    <footer className='w-full bottom-0 fixed p-4 bg-custom-black text-white flex justify-around items-center'>
      <div>
        <a href={`mailto:${email}`} className='ml-4 text-slate-600'>
          {email}
        </a>
      </div>
      <div className='text-slate-600'>© {copyright}</div>
      <div className='flex items-center'>
        {profiles.map((profile, index) => {
          return (
            <a
              key={index}
              href={profile.url}
              className='ml-6 block text-slate-600 hover:text-slate-500 dark:hover:text-slate-300'
              target='_blank'
              rel='noreferrer'
            >
              <svg
                fill='currentColor'
                viewBox='0 0 20 20'
                className='w-8 h-8'
                aria-hidden='true'
              >
                <path d={profile.path}></path>
              </svg>
            </a>
          );
        })}
      </div>
    </footer>
  );
};

export default Footer;
