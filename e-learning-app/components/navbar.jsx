'use client';
import React, { useState } from 'react';
import logoImg from '@/public/logoImg.png';
import Image from 'next/image';
import Link from 'next/link';
import { CiSearch, CiMenuBurger } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from '@/components/ui/select';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <ClerkProvider>
      <nav className='sticky top-0 z-50 bg-white shadow-md px-4 py-3 flex items-center justify-between flex-wrap'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-2 text-[var(--color)] font-bold text-xl'
        >
          <Image src={logoImg} alt='Logo' width={30} height={30} />
          MyCourse.io
        </Link>

        {/* Toggle Button */}
        <button
          className='md:hidden text-[var(--color)] text-2xl'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <AiOutlineClose /> : <CiMenuBurger />}
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full md:flex md:items-center md:w-auto  ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
        >
          <div className='flex flex-col md:flex-row md:items-center md:gap-6 mt-4 md:mt-0 '>
            {/* Dropdown */}
            <Select>
              <SelectTrigger className='w-[160px]'>
                <SelectValue placeholder='Browse' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Explore</SelectLabel>
                  <SelectItem value='courses'>Courses</SelectItem>
                  <SelectItem value='teachers'>Teachers</SelectItem>
                  <SelectItem value='students'>Students</SelectItem>
                  <SelectItem value='workshops'>Workshops</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            {/* Search */}
            <div className='relative w-full md:w-[200px] mt-3 md:mt-0'>
              <input
                type='text'
                placeholder='Search for course'
                className='w-full border border-gray-300 rounded px-3 py-2 bg-[#F9F9F9] text-[var(--gray-color)] focus:outline-none'
              />
              <CiSearch className='absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--color)]' />
            </div>

            {/* Auth Section */}
            <div className='flex items-center gap-2 mt-4 md:mt-0'>
              <SignedIn>
                <Link
                  href='/courses'
                  className='text-[var(--color)] hover:text-[var(--color-hover)] transition-colors underline'
                >
                  View Courses
                </Link>
                <UserButton />
              </SignedIn>

              <SignedOut>
                <SignInButton mode='modal'>
                  <button className='px-3 py-1 rounded text-sm text-[var(--color)] border border-[var(--color)] hover:bg-[var(--color)] hover:text-white transition'>
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode='modal'>
                  <button className='px-3 py-1 rounded text-sm text-[var(--color)] bg-[var(--background)] hover:opacity-90 transition hover:text-[var(--color-hover)] '>
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
            </div>
          </div>
        </div>
      </nav>
    </ClerkProvider>
  );
};

export default Navbar;
