/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useState, useEffect, ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  component: ReactNode;
}

const Modal = ({
  isOpen,
  onClose,
  component,
} : ModalProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    } else {
      const timer = setTimeout(() => setIsAnimating(false), 300); // Match animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isAnimating) return null;

  const isLg = typeof window !== 'undefined' ? window.innerWidth >= 1024 : false;
  return (
    <div
      className="fixed container h-full w-full inset-0 bg-black bg-opacity-50 z-50 flex items-end lg:items-center justify-end p-4"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-lg shadow-lg w-full max-w-md lg:max-w-[1000px] p-6 relative transition-all duration-300 ease-in-out ${
          isOpen
            ? isLg
              ? 'translate-y-0 opacity-100'
              : 'translate-x-0 opacity-100'
            : isLg
            ? 'translate-y-full opacity-0'
            : 'translate-x-full opacity-0'
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent closing on modal click
        style={{
          transform: isLg ? 'translateY(0)' : 'translateX(0)',
          animation: isOpen ? (isLg ? 'slideUp 0.3s ease' : 'slideIn 0.3s ease') : 'none',
        }}
      >
        <button
          className="absolute top-4 text-[16px] p-5 rounded-[6px] right-4 bg-[#F2F2F2] text-[#7E7360] hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        
      </div>
    
    <style jsx>{`
      @keyframes slideIn {
        from {
          transform: translateX(100%);
          opacity: 0;
        }
        to {
          transform: translateX(0);
          opacity: 1;
        }
      }
      @keyframes slideUp {
        from {
          transform: translateY(100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
    `}</style>
    </div>
  )
}

export default Modal