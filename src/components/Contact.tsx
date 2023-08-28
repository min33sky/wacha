'use client';

import { fadeIn } from '@/lib/framer/variants';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import { Button } from './ui/button';

export default function Contact() {
  return (
    <section
      className="pt-24 xl:pt-48 flex items-end pb-0 bg-[#b2b7c2]/10"
      id="contact"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row xl:items-center">
          {/* Text */}
          <div className="flex-1 xl:ml-24 text-center md:text-left mb-12 md:mb-0">
            <div className="max-w-[520px] mx-auto order-2 xl:order-none">
              <motion.h2
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={'show'}
                viewport={{
                  once: false,
                  amount: 0.6,
                }}
                className="text-lg font-bold"
              >
                Download our App now and hit the road with ease
              </motion.h2>
              <motion.p
                variants={fadeIn('right', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{
                  once: false,
                  amount: 0.6,
                }}
                className="mb-10"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                repellendus ullam quaerat autem soluta maxime asperiores vero
                accusantium velit accusamus!
              </motion.p>
              {/* Btns */}
              <motion.div
                variants={fadeIn('right', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{
                  once: false,
                  amount: 0.6,
                }}
                className="flex gap-x-3 justify-center md:justify-start"
              >
                <Button>
                  <Image
                    src={'/icons/buttons/google-play.svg'}
                    width={132}
                    height={36}
                    alt="google play"
                  />
                </Button>
                <Button>
                  <Image
                    src={'/icons/buttons/app-store.svg'}
                    width={132}
                    height={36}
                    alt="app store"
                  />
                </Button>
              </motion.div>
            </div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.2,
            }}
            className="flex flex-1 justify-center order-1 md:order-none"
          >
            <Image
              src={'/images/cta/phone.svg'}
              width={320}
              height={640}
              alt="phone"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
