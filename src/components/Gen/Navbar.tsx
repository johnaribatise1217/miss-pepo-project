'use client'
import { navLinks } from '@/app/lib/NavLinks'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav className='w-full top-10 left-0 fixed z-50'>
      {/* For desktop view */}
      <div className='container font-inter bg-white/10 backdrop-blur-[50px] shadow-md px-[10px] py-[10px] rounded-[16px] flex items-center justify-between'>
        <Image
          src='/images/pepologo.png'
          alt='logo'
          width={100}
          loading='lazy'
          height={100}
          className='w-[75px] h-[35px] object-contain'
        />
        <div className='flex items-center px-[12px] py-[12px]
         justify-between gap-[1rem] w-[412px]'>
          {navLinks.map((link, index) => (
            <Link href={link.path} key={index}
            className={`${pathname === link.path ? 'text-white font-[700]' : 'text-secGrey2 font-[200]'} text-[16px]  font-semibold`}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar