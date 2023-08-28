'use client';

import { cn } from '@/lib/utils';
import { MoveUpIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

export default function BackToTopBtn() {
  const [isActive, setisActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setisActive(true);
      } else {
        setisActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Link
      to="home"
      smooth={true}
      className={cn(
        'fixed bg-red-500 w-12 h-12 right-16 bottom-11 z-10 rounded-xl cursor-pointer flex items-center justify-center text-white border-2 border-white',
        !isActive && 'hidden',
      )}
    >
      <MoveUpIcon size={24} />
    </Link>
  );
}
