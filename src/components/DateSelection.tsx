import React from 'react';
import { DatePickerWithRange } from './DatePickerWithRange';
import { Label } from './ui/label';
import { Calendar } from 'lucide-react';

export default function DateSelection() {
  return (
    <div className="mx-auto">
      <Label className="flex items-center justify-center">
        <Calendar className="w-4 h-4 mr-2 text-red-500" />
        날짜 선택
      </Label>
      <DatePickerWithRange className="mt-2" />
    </div>
  );
}
