"use client";
import React, { useState, useEffect } from 'react'
import Wrapper from './Wrapper';
import Link from 'next/link';
import Menu from './Menu';
import MenuMobile from './MenuMobile';

import { BsCart } from 'react-icons/bs'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BiMenuAltRight } from 'react-icons/bi'
import { VscChromeClose } from 'react-icons/vsc'



const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0")
  const [lastScrollY, setLastScrollY] = useState(0)

  const controlNavbar = () => {
    if(window.scrollY > 200 ) {
      if(window.scrollY > lastScrollY && !mobileMenu) {
        setShow("-translate-y-[80px]")
      } else {
        setShow("shadow-sm")
      }
    } else {
      setShow("translate-y-0")
    }
    setLastScrollY(window.scrollY)
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    }
  }, [lastScrollY])

  return (
    <header className={`w-full h-[50px] md:h-[80hx] bg-white flex items-center
    justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
      <Wrapper className="h-[60px] flex justify-between items-center">
        <Link href='/'>
        <img 
        src="/assets/images/ecomlogob.png" 
        className='w-[40px] md:w-[60px]'
        />
        </Link>

        <Menu 
          showCatMenu={showCatMenu} 
          setShowCatMenu={setShowCatMenu} 
        />

        {mobileMenu && (
        <MenuMobile
          showCatMenu={showCatMenu} 
          setShowCatMenu={setShowCatMenu}
          setMobileMenu={setMobileMenu} 
        /> )}
        

        <div className='flex items-center gap-2 text-black'>
          {/* Icons - cart and wishlist */}
              <div 
                className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
                items-center hover:bg-black/[0.05] relative cursor-pointer'>
                <IoMdHeartEmpty className='text-[19px] md:text-[24px]'/>
                <div 
                  className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] bg-red-600 
                  justify-center items-center rounded-full text-white absolute top-1 left-5
                  md:left-7 text-[10px] md:text-[12px] flex px-[2px] md:px-[5px]' >
                  7
                </div>
              </div>
                <Link href='/cart'>
                  <div 
                    className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
                    items-center hover:bg-black/[0.05] relative cursor-pointer'>
                    <BsCart className='text-[15px] md:text-[20px]'/>
                  <div 
                    className='h-[14px] md:h-[18px] min-w-[14px] md:min-w-[18px] bg-red-600 
                    justify-center items-center rounded-full text-white absolute top-1 left-5
                    md:left-7 text-[10px] md:text-[12px] flex px-[2px] md:px-[5px]' >
                    5
                  </div>
                </div>
              </Link>
          {/* End of Icons */}

          {/* mobile screen */}
          <div className='w-8 md:w-12 h-8 md:h-12 rounded-full flex justify-center
              items-center hover:bg-black/[0.05] relative cursor-pointer -mr-2 md:hidden'>
                {mobileMenu ? ( 
                  <VscChromeClose
                    className='text-[16px] md:hidden'
                    onClick={() => setMobileMenu(false)}
                  />
                ) : (
                  <BiMenuAltRight
                    className='text-[20px] md:hidden'
                    onClick={() => setMobileMenu(true)}
                  />
                )}
          </div>
        </div>
      </Wrapper>
    </header>
  )
}

export default Navbar