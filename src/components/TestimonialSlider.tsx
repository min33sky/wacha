'use client';

import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { QuoteIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/framer/variants';

const testimonialData = [
  {
    message:
      'They truly exceed my expectations and made my car ental experience a delight',
    name: 'John Doe',
    job: 'Photographer & Videographer',
    avatar: '/images/testimonial/avatar.png',
  },
  {
    message:
      'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
    name: 'Jane Doe',
    job: 'Photographer & Videographer',
    avatar: '/images/testimonial/avatar.png',
  },
];

export default function TestimonialSlider() {
  return (
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
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="h-[450px] xl:h-[400px]"
      >
        {testimonialData.map((person, index) => {
          const { avatar, job, message, name } = person;
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col justify-center items-center text-center">
                {/* 아이콘 */}
                <QuoteIcon className="text-red-700 mb-6" />
                <div className="text-2xl xl:text-4xl max-w-[874px] mb-12 font-medium">
                  {message}Q
                </div>
                <Image
                  src={avatar}
                  width={64}
                  height={64}
                  alt="avatar"
                  className="mb-4"
                />
                <div className="text-lg font-medium">{name}</div>
                <div className="text-slate-700">{job}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
