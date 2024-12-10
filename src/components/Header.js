import React from 'react';
import Socials from './Socials';
import Logo from '../img/header/logo.svg';
import MobileNav from './MobileNav'; 

import { Link } from 'react-router-dom';

const Header = () => {
  return (

    <header className='fixed w-full px-[30px] lg:px-[100px]
     z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row
      lg:items-center w-full justify-between'>

        <Link to={'/'} className='max-w-[200px]'>
          <img src={Logo} alt='' />
        </Link>

        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link 
            to={'/'}
            className='text-[#696c6d] hover:text-primary transition'>
              Home
          </Link>
          <Link 
            to={'/about'}
            className='text-[#696c6d] hover:text-primary transition'>
              About
          </Link>
          <div class="group relative cursor-pointer">
              <div class="flex items-center justify-between">
                  <a class="menu-hover py-2 text-base font-medium text-black lg:mx-4">
                    Galleries
                  </a>
                  <span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                          stroke="currentColor" class="h-4 w-4">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                  </span>
              </div>
              <div class="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
                  <Link 
                    to={'/weddings'} 
                    class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Weddings
                  </Link>
                  <Link 
                    to={'/families'} 
                    class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Families
                  </Link>
                  <Link 
                    to={'/seniors'} 
                    class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Seniors
                  </Link>
                  <Link 
                    to={'/boudoir'} 
                    class="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">
                    Boudoir
                  </Link>
              </div>
          </div>
          <Link 
            to={'/contact'}
            className='text-[#696c6d] hover:text-primary transition'>
              Contact
          </Link>
        </nav>
        <Socials />
        <MobileNav />
      </div>
    </header>

  );
};

export default Header;
