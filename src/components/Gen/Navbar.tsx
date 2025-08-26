'use client'
import { navLinks } from '@/app/lib/NavLinks'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import MobileNavBase from './modals/MobileNavBase'

const Navbar = () => {
  const pathname = usePathname()
  const [showNav, setShowNav] = useState(false)

  const handleOpenMobile = () => {
    setShowNav(true)
  }

  const handleCloseMobile = () => {
    setShowNav(false)
  }

  return (
    <nav className='w-full top-[25px] sm:top-10 left-0 fixed z-50'>
      {/* For desktop view */}
      <div className='container font-inter bg-white/10 backdrop-blur-[50px] shadow-md px-[18px] py-[20px] rounded-[16px] flex items-center justify-between'>
        <Image
          src='/images/pepologo.png'
          alt='logo'
          width={100}
          loading='lazy'
          height={100}
          className='w-[75px] h-[30px] object-contain'
        />
        <div className='hidden lg:flex items-center xl:py-[9px] px-[12px] 2xl:py-[12px]
         justify-between gap-[1rem] w-[412px]'>
          {navLinks.map((link, index) => (
            <Link href={link.path} key={index}
            className={`${pathname === link.path ? 'text-white font-[700]' : 'text-secGrey2 font-[200]'} text-[16px]  font-semibold`}>
              {link.name}
            </Link>
          ))}
        </div>
        <div className='lg:hidden block'>
          <GiHamburgerMenu onClick={handleOpenMobile} className='text-white text-[25px] cursor-pointer'/>
        </div>
      </div>
      {/* For Mobile view */}
      <MobileNavBase isOpen={showNav} onClose={handleCloseMobile} />
    </nav>
  )
}

export default Navbar