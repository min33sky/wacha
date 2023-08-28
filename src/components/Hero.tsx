'use client';

import React from 'react';
import { useSearchContext } from '@/contexts/SearchContext';
import Search from './Search';
import { Button } from './ui/button';
import Image from 'next/image';
import { easeInOut, motion } from 'framer-motion';
import { fadeIn } from '@/lib/framer/variants';

export default function Hero() {
  const { searchActive } = useSearchContext();

  return (
    <section className="h-screen xl:h-[90vh] bg-[#b2b7c2]/10" id="home">
      <div className="container mx-auto h-full xl:pt-10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-start h-full">
          <div className="text-center xl:max-w-xl xl:text-left mt-16 xl:mt-0">
            <motion.h1
              variants={fadeIn('down', 0.2)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.6,
              }}
              className="text-2xl md:text-4xl xl:text-5xl font-bold mb-4 xl:mb-6"
            >
              최고의 <span className="text-red-500">글로벌</span> 제품 소개
            </motion.h1>
            <motion.p
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.6,
              }}
              className="max-w-[550px] mx-auto xl:mx-0 mb-6 xl:mb-10"
            >
              다양한 범위의 저렴하고 신뢰할 수 있는 렌터카를 이용하여 모험을
              위한 이상적인 승차감을 찾으십시오.
            </motion.p>

            <motion.div
              variants={fadeIn('down', 0.6)}
              initial="hidden"
              whileInView={'show'}
              viewport={{
                once: false,
                amount: 0.8,
              }}
              className="flex gap-x-3 justify-center xl:justify-start"
            >
              <Button variant={'ghost'}>
                <Image
                  src="/icons/buttons/app-store.svg"
                  width={132}
                  height={36}
                  alt="appstore"
                />
              </Button>
              <Button variant={'ghost'}>
                <Image
                  src="/icons/buttons/google-play.svg"
                  width={132}
                  height={36}
                  alt="playstore"
                />
              </Button>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn('up', 0.6)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.6,
            }}
            className="relative w-full h-full max-h-[50vh] md:max-w-[70vw] xl:max-w-[860px] xl:max-h-[542px] xl:absolute xl:-right-[100px] min-[1680px]:right-[120px] xl:top-48"
          >
            <Image
              src={'/images/hero/car.svg'}
              fill
              alt="car image"
              style={{ objectFit: 'cover' }}
              priority
            />
          </motion.div>
        </div>
      </div>

      {searchActive ? (
        <motion.div
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          transition={{ ease: easeInOut }}
          className="fixed top-[60px] z-10 w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div
            variants={fadeIn('up', 0.8)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.2,
            }}
          >
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
}
