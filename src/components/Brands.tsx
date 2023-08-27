'use client';

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/framer/variants';

export default function Brands() {
  return (
    <section className="xl:pt-16 xl:h-[200px] bg-white flex flex-col justify-center">
      <motion.div
        variants={fadeIn('up', 0.4)}
        initial="hidden"
        whileInView={'show'}
        viewport={{
          once: false,
          amount: 0.6,
        }}
        className="container mx-auto"
      >
        {/* Brand Wrapper */}
        <div className="grid grid-cols-3 gap-6 place-items-center xl:flex xl:flex-wrap xl:gap-x-6 xl:justify-between">
          <div>
            <Image
              src={'/icons/brands/ford.svg'}
              width={85}
              height={82}
              alt="brand"
            />
          </div>
          <div>
            <Image
              src={'/icons/brands/audi.svg'}
              width={85}
              height={82}
              alt="brand"
            />
          </div>
          <div>
            <Image
              src={'/icons/brands/bmw.svg'}
              width={85}
              height={82}
              alt="brand"
            />
          </div>
          <div>
            <Image
              src={'/icons/brands/mazda.svg'}
              width={85}
              height={82}
              alt="brand"
            />
          </div>
          <div>
            <Image
              src={'/icons/brands/mercedes.svg'}
              width={85}
              height={82}
              alt="brand"
            />
          </div>
          <div>
            <Image
              src={'/icons/brands/skoda.svg'}
              width={85}
              height={82}
              alt="brand"
            />
          </div>
          <div>
            <Image
              src={'/icons/brands/vw.svg'}
              width={85}
              height={82}
              alt="brand"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
