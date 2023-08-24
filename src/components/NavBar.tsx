import React from 'react';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

function NavBar() {
  return (
    <div className="flex items-center justify-between p-3 px-5 shadow-sm border-b-[1px]">
      <Link href={'/'} className="font-bold">
        와차
      </Link>

      <div className="hidden md:flex gap-5">
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          홈
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          역사
        </h2>
        <h2 className="hover:bg-blue-500 px-3 cursor-pointer p-2 rounded-full hover:text-white">
          연락하기
        </h2>
      </div>

      <UserButton />
    </div>
  );
}

export default NavBar;
