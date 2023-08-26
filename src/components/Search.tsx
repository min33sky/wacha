'use client';

import { useSearchContext } from '@/contexts/SearchContext';
import { cn } from '@/lib/utils';
import React from 'react';
import LocationSelection from './LocationSelection';
import DateSelection from './DateSelection';
import HoursSelection from './HoursSelection';

export default function Search() {
  const { searchActive } = useSearchContext();

  return (
    <div
      className={cn(
        'hidden xl:block w-full relative shadow-lg bg-slate-800',
        searchActive
          ? 'rounded-none xl:h-[80px]'
          : 'rounded-[20px] py-6 xl:pr-4 xl:h-[98px]',
      )}
    >
      <div className="xl:h-full flex items-center px-6 xl:px-0">
        <LocationSelection />
        <DateSelection />
        <HoursSelection />
      </div>
    </div>
  );
}
