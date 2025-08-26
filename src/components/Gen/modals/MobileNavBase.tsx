'use client'
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import React from 'react'
import { navLinks } from '@/app/lib/NavLinks';
import Link from 'next/link';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavBase = ({isOpen, onClose} : ModalProps) => {
  const pathname = usePathname()
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-transparent z-40"
            onClick={onClose}
          />

          {/* Sliding Modal */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "keyframes", duration: 0.4 }}
            className="fixed w-full left-[5%] sm:left-[7.5%] container lg:hidden top-[120px] bottom-[120px] min-h-[85vh] overflow-auto rounded-[25px] bg-black z-50"
          >
            <div className='w-full p-5 flex flex-col'>
              {navLinks.map((link, index) => (
                <Link href={link.path} key={index} onClick={onClose}
                className={`${pathname === link.path ? 'text-white font-[700]' : 'text-secGrey2 font-[200]'} text-[20px] mb-[2rem]`}>
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileNavBase