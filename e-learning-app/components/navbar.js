import React from 'react';
import logoImg from '@/public/logoImg.png';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
  return (
    <ClerkProvider>
      <nav className='flex items-center justify-between p-4'>
        <div className=''>
            <Link href='/' className='flex items-center gap-1 text-[var(--color)] cursor-pointer'>
          <Image src={logoImg} alt='Logo' width={25} height={25} />
          Group 30
            </Link>
        </div>
        <select name='Browse' id=''>
          <option value='Browse'>Browse</option>
          <option value='Courses'>Courses</option>
          <option value='Teachers'>Teachers</option>
          <option value='Students'>Students</option>
        </select>
        <div className='relative w-100 h-9'>
          <input
            type='text'
            placeholder='Search for course'
            className='w-full border border-gray-300 rounded p-2 pl-3 bg-[#F9F9F9] text-[var(--gray-color)]'
          />
          <CiSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color)]' />
        </div>
            <SignedIn>
              <Link href="/courses" className="ml-4 text-[var(--color)] hover:text-[var(--color-hover)] transition-colors">
                View Courses
              </Link>
            </SignedIn>
        <div className='flex items-center gap-2'>
          <SignedIn>
            <UserButton />
            
          </SignedIn>
          <SignedOut>
            <SignInButton mode='modal'>Sign In</SignInButton>
            <SignUpButton mode='modal'>Sign Up</SignUpButton>
          </SignedOut>
        </div>
      </nav>
    </ClerkProvider>
  );
};

export default Navbar;
