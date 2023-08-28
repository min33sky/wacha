'use client';

import { CarFrontIcon } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/framer/variants';

export default function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });

  return (
    <section ref={ref} className="section flex items-center" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between">
          {/* Image */}
          <motion.div
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={'show'}
            viewport={{
              once: false,
              amount: 0.6,
            }}
            className="flex-1 mb-8 xl:mb-0"
          >
            <Image
              src={'/images/about/car01.png'}
              className="rounded-md"
              width={600}
              height={448}
              alt="car"
            />
          </motion.div>
          {/* Text & Stats */}
          <div className="flex flex-1 items-center xl:justify-center">
            <div className="xl:max-w-[517px]">
              <motion.h2
                variants={fadeIn('up', 0.4)}
                initial="hidden"
                whileInView={'show'}
                viewport={{
                  once: false,
                  amount: 0.6,
                }}
                className="text-lg font-bold"
              >
                자동차 서비스가 간소화되었습니다.
              </motion.h2>
              <motion.p
                variants={fadeIn('up', 0.6)}
                initial="hidden"
                whileInView={'show'}
                viewport={{
                  once: false,
                  amount: 0.6,
                }}
                className="mb-[42px] max-w-md"
              >
                편리한 위치, 다양한 차종, 신뢰할 수 있는 수리점을 통해 원활한
                자동차 경험을 제공합니다.
              </motion.p>
              {/* stats */}
              <motion.div
                variants={fadeIn('up', 0.8)}
                initial="hidden"
                whileInView={'show'}
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                className="flex items-center gap-x-8 mb-12"
              >
                {/* car types */}
                <div className="flex flex-col w-[100px]">
                  <CarFrontIcon className="w-6 h-6 text-red-500" />
                  <div className="text-3xl font-black text-white mb-2">
                    {inView ? (
                      <CountUp start={0} end={50} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-slate-200">
                    car <br /> types
                  </div>
                </div>
                {/* rental outlets */}
                <div className="flex flex-col w-[100px]">
                  <CarFrontIcon className="w-6 h-6 text-red-500" />
                  <div className="text-3xl font-black text-white mb-2">
                    {inView ? (
                      <CountUp start={0} end={135} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-slate-200">
                    rental <br /> outlets
                  </div>
                </div>
                {/* repair points */}
                <div className="flex flex-col w-[100px]">
                  <CarFrontIcon className="w-6 h-6 text-red-500" />
                  <div className="text-3xl font-black text-white mb-2">
                    {inView ? (
                      <CountUp start={0} end={35} duration={3} delay={1} />
                    ) : null}
                    +
                  </div>
                  <div className="uppercase text-[13px] font-semibold text-slate-200">
                    repair <br /> points
                  </div>
                </div>
              </motion.div>
              <motion.div
                variants={fadeIn('up', 1)}
                initial="hidden"
                whileInView={'show'}
                viewport={{
                  once: false,
                  amount: 0.6,
                }}
              >
                <Button className="hidden xl:block w-full h-1/6 uppercase font-medium ">
                  모든 차량 보기
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
