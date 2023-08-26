import React from 'react';
import LocationSelection from './LocationSelection';
import DateSelection from './DateSelection';
import HoursSelection from './HoursSelection';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

export default function SearchMobile() {
  return (
    <div className="xl:hidden font-medium">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-4">
          <LocationSelection />
          <DateSelection />
          <HoursSelection />

          <div className="flex items-center px-6">
            <Button size={'lg'} className={cn('mx-auto')}>
              Search
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
