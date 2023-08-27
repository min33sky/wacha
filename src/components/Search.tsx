'use client';

import { useSearchContext } from '@/contexts/SearchContext';
import { cn } from '@/lib/utils';
import React from 'react';
import LocationSelection from './LocationSelection';
import DateSelection from './DateSelection';
import HoursSelection from './HoursSelection';
import { Button } from './ui/button';

export default function Search() {
  const { searchActive } = useSearchContext();

  return (
    <div
      className={cn(
        'hidden xl:block w-full relative shadow-lg bg-slate-800',
        searchActive
          ? 'rounded-none xl:h-[85px] px-10 py-2'
          : 'rounded-[20px] py-6 xl:pr-4 xl:h-[98px]',
      )}
    >
      <div className={cn('flex h-full', searchActive && 'container mx-auto')}>
        <LocationSelection />
        <DateSelection />
        <HoursSelection />

        <div className="xl:h-full w-36 px-6 xl:px-0">
          <Button className={cn('h-full w-full text-lg text-white')}>
            찾기
          </Button>
        </div>
      </div>
    </div>
  );
}
