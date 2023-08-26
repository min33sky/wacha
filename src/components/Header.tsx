'use client';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import SearchMobile from './SearchMobile';
import { useMediaQuery } from 'react-responsive';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { MenuIcon, XIcon } from 'lucide-react';
import { Button } from './ui/button';
import { useSearchContext } from '@/contexts/SearchContext';

export default function Header() {
  const [header, setHeader] = useState(false);
  const [nav, setNav] = useState(false);
  const { setSearchActive } = useSearchContext();

  const desktopMode = useMediaQuery({
    query: '(min-width: 1024px)',
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setHeader(true);
      } else {
        setHeader(false);
      }

      if (window.scrollY > 800) {
        setSearchActive(true);
      } else {
        setSearchActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setSearchActive]);

  return (
    <header
      className={cn(
        'fixed w-full max-w-[1920px] mx-auto z-20 transition-all duration-300',
        header ? 'bg-black shadow-md py-4' : 'bg-transparent shadow-none py-4',
      )}
    >
      <div className="container mx-auto flex flex-col xl:flex-row xl:items-center xl:justify-between">
        <div className="flex justify-between items-center px-4">
          <Link
            to="home"
            smooth={desktopMode}
            spy={true}
            className="cursor-pointer"
          >
            Wacha
          </Link>

          {/* Nav Open Menu */}
          <Button
            variant={'ghost'}
            onClick={() => setNav(!nav)}
            size={'icon'}
            className="cursor-pointer xl:hidden"
          >
            {nav ? (
              <XIcon className="text-4xl" />
            ) : (
              <MenuIcon className="text-4xl" />
            )}
          </Button>
        </div>

        {/* Nav */}
        <nav
          className={cn(
            'flex flex-col w-full bg-slate-800 gap-y-6 overflow-hidden font-bold xl:font-medium xl:flex-row xl:w-max xl:gap-x-8 xl:h-max xl:bg-transparent xl:pb-0 transition-all duration-150 text-center xl:text-left uppercase text-sm xl:text-[15px] xl:normal-case',
            nav
              ? 'max-h-max py-8 px-4 xl:py-8 xl:px-0'
              : 'max-h-0 xl:max-h-max',
          )}
        >
          <Link
            className="cursor-pointer"
            to="home"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Home
          </Link>
          <Link
            className="cursor-pointer"
            to="about"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            About
          </Link>
          <Link
            className="cursor-pointer"
            to="cars"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Cars
          </Link>
          <Link
            className="cursor-pointer"
            to="why"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Why Us
          </Link>
          <Link
            className="cursor-pointer"
            to="testimonial"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Testimonials
          </Link>
          <Link
            className="cursor-pointer"
            to="contact"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            Contact
          </Link>

          <Link
            className="cursor-pointer max-w-[164px] mx-auto bg-slate-800 text-red-500"
            to="/"
            activeClass="active"
            smooth={desktopMode}
            spy={true}
          >
            See all cars
          </Link>
          <SearchMobile />
        </nav>
      </div>
    </header>
  );
}
