'use client';

import React, { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Label } from './ui/label';
import { MapPinIcon } from 'lucide-react';

const locations = [
  'Main Street 123, United States',
  'Business Center 456, Canada',
  'Downtown 789, United Kingdom',
];

export default function LocationSelection() {
  const [currentLocation, setCurrentLocation] = useState('');

  return (
    <section className="mx-auto">
      <Label className="flex items-center justify-center">
        <MapPinIcon className="w-4 h-4 mr-2 text-red-500" />
        위치 선택
      </Label>
      <Select onValueChange={setCurrentLocation}>
        <SelectTrigger className="w-[180px] mt-2">
          <SelectValue placeholder="위치" />
        </SelectTrigger>
        <SelectContent className="" align="center">
          {locations.map((location) => (
            <SelectItem key={location} value={location} className="text-right">
              {location}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}
