'use client';

import { fadeIn } from '@/lib/framer/variants';
import { motion } from 'framer-motion';
import {
  HeartHandshake,
  HeartHandshakeIcon,
  KeyIcon,
  TrendingUpIcon,
} from 'lucide-react';
import Image from 'next/image';
import React from 'react';

export default function Why() {
  return (
    <section className="section flex items-center bg-green-200" id="why">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once: false,
            amount: 0.6,
          }}
          className="text-lg font-bold text-center"
        >
          Unmatched excellence and customer satisfaction
        </motion.h2>
        <motion.p
          variants={fadeIn('up', 0.4)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once: false,
            amount: 0.6,
          }}
          className="max-w-[680px] text-center mx-auto mb-2"
        >
          Our dedication to providing exceptional services sets us apart from
          the competition From the moment you engage with us, we strive to
          exceed your expectations in every interaction.
        </motion.p>
        {/* Car Image */}
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once: false,
            amount: 0.6,
          }}
          className="hidden md:flex justify-center mb-6 xl:mb-2"
        >
          <Image
            src={'/images/why/car.svg'}
            width={1060}
            height={420}
            alt="car"
          />
        </motion.div>

        {/* Grid items */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          initial="hidden"
          whileInView={'show'}
          viewport={{
            once: false,
            amount: 0.4,
          }}
          className="flex flex-wrap justify-center xl:grid xl:grid-cols-3 gap-4 xl:gap-y-0 xl:gap-x-[30px]"
        >
          {/* Item */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <KeyIcon className="w-12 h-12 mx-auto mb-4 text-red-500" />
            <h3 className="text-lg font-semibold">Rent simply and quickly</h3>
            <p className="hidden xl:flex">
              Se prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>
          {/* Item */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <TrendingUpIcon className="w-12 h-12 mx-auto mb-4 text-red-500" />
            <h3 className="text-lg font-semibold">
              Modern & well maintained vehicles
            </h3>
            <p className="hidden xl:flex">
              Se prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>
          {/* Item */}
          <div className="flex flex-col items-center text-center max-w-[160px] xl:max-w-none p-2 xl:p-0">
            <HeartHandshakeIcon className="w-12 h-12 mx-auto mb-4 text-red-500" />
            <h3 className="text-lg font-semibold">
              Prompt and flexible services
            </h3>
            <p className="hidden xl:flex">
              Se prioritize your need and we go above and beyond to ensure your
              experience with us is nothing short of outstanding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
