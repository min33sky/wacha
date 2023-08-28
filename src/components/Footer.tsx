'use client';

import { fadeIn } from '@/lib/framer/variants';
import { motion } from 'framer-motion';
import { MailIcon, SmartphoneIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Link } from 'react-scroll';
import { Form } from './ui/form';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Copyright from './Copyright';

export default function Footer() {
  return (
    <footer className="pt-20 z-20 " id="contact">
      <div className="container mx-auto mb-24">
        {/* Grid */}
        <motion.div
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once: false,
            amount: 0.6,
          }}
          className="flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14"
        >
          {/* Logo */}
          <div className="flex flex-col flex-1 gap-y-8">
            <Link to="home" smooth={true} spy={true} className="cursor-pointer">
              <Image
                src={'/icons/logo.svg'}
                width={200}
                height={200}
                alt="logo"
              />
            </Link>
            {/* Text */}
            <div className="text-slate-700">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut,
              nihil?
            </div>
            {/* phone & email */}
            <div className="flex flex-col gap-y-4 font-semibold">
              <div className="flex items-center gap-x-[10px]">
                <SmartphoneIcon size={16} />
                <div className="font-medium">(123)456-7890</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <MailIcon size={16} />
                <div className="font-medium">office@haha.com</div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col flex-1 xl:items-center">
            <div>
              <h3 className="font-bold mb-8">Company</h3>
              <ul className="flex flex-col gap-y-4 font-semibold">
                <li>
                  <a href="">New York</a>
                </li>
                <li>
                  <a href="">Careers</a>
                </li>
                <li>
                  <a href="">Mobile</a>
                </li>
                <li>
                  <a href="">Blog</a>
                </li>
                <li>
                  <a href="">How we work</a>
                </li>
              </ul>
            </div>
          </div>

          {/* program */}
          <div className="flex-1">
            <h3 className="font-bold mb-8">Working Hour</h3>
            <div className="flex flex-col gap-y-4">
              <div className="flex gap-x-2">
                <div className="text-slate-700">Mon-Fri:</div>
                <div className="font-semibold">09:00AM - 09:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-slate-700">SAT:</div>
                <div className="font-semibold">09:00AM - 07:00PM</div>
              </div>
              <div className="flex gap-x-2">
                <div className="text-slate-700">SUN:</div>
                <div className="font-semibold">CLOSED</div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex-1">
            <h3 className="font-bold mb-8">Newsletter</h3>
            <div className="mb-9 text-slate-700">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel,
              sit?
            </div>
            {/* Form */}
            <form className="flex gap-x-2 h-14">
              <Input placeholder="Your Email" />
              <Button>전송</Button>
            </form>
          </div>
        </motion.div>
      </div>
      <Copyright />
    </footer>
  );
}
