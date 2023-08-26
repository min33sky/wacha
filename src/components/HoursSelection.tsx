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
import { TimerIcon } from 'lucide-react';

const hours = ['09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'];

export default function HoursSelection() {
  const [selectedTime, setSelectedTime] = useState('');

  return (
    <section className="mx-auto">
      <Label className="flex items-center justify-center">
        <TimerIcon className="w-4 h-4 mr-2 text-red-500" />
        시간 선택
      </Label>
      <Select onValueChange={setSelectedTime}>
        <SelectTrigger className="w-[180px] mt-2">
          <SelectValue placeholder="시간" />
        </SelectTrigger>
        <SelectContent className="" align="center">
          {hours.map((hour) => (
            <SelectItem key={hour} value={hour} className="text-right">
              {hour}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </section>
  );
}
