'use client';
import React, { useState } from 'react';
import logoImg from '@/public/logoImg.png';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMenuBurger } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/pages/dashboard', label: 'Dashboard' },
    { href: '/pages/about', label: 'About' },
    { href: '/pages/contact', label: 'Contact' },
  ];

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <nav className='sticky top-0 z-50 bg-white shadow-md px-4 py-3'>
      <div className='max-w-7xl mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link
          href='/'
          className='flex items-center gap-2 text-[var(--color)] font-bold text-xl'
        >
          <Image src={logoImg} alt='Logo' width={30} height={30} />
          MyCourse.io
        </Link>

        {/* Desktop Navigation */}
        <div className='hidden md:flex items-center gap-8'>
          {/* Navigation Links */}
          <div className='flex items-center gap-6'>
            <SignedIn>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[var(--color-hover)] ${
                    isActive(link.href)
                      ? 'text-[var(--color-hover)] border-b-2 border-[var(--color-hover)] pb-1'
                      : 'text-[var(--gray-color)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </SignedIn>
            <SignedOut>
              {navLinks
                .filter(
                  (link) => link.label === 'About' || link.label === 'Contact'
                )
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-[var(--color-hover)] ${
                      isActive(link.href)
                        ? 'text-[var(--color-hover)] border-b-2 border-[var(--color-hover)] pb-1'
                        : 'text-[var(--gray-color)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
            </SignedOut>
          </div>

          {/* Auth Section */}
          <div className='flex items-center gap-3'>
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-8 h-8',
                  },
                }}
              />
            </SignedIn>

            <SignedOut>
              <SignInButton mode='modal'>
                <button className='px-4 py-2 rounded-lg text-sm text-[var(--color)] border border-[var(--color)] hover:bg-[var(--color)] hover:text-white transition-all'>
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton mode='modal'>
                <button className='px-4 py-2 rounded-lg text-sm bg-[var(--color)] text-white hover:bg-[var(--color-hover)] transition-all'>
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className='md:hidden text-[var(--color)] text-2xl'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <AiOutlineClose /> : <CiMenuBurger />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden mt-4 pb-4 border-t border-gray-200'>
          <div className='flex flex-col gap-4 pt-4'>
            {/* Mobile Navigation Links */}
            <SignedIn>
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-[var(--color-hover)] ${
                    isActive(link.href)
                      ? 'text-[var(--color-hover)] border-b-2 border-[var(--color-hover)] pb-1'
                      : 'text-[var(--gray-color)]'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </SignedIn>
            <SignedOut>
              {navLinks
                .filter(
                  (link) => link.label === 'About' || link.label === 'Contact'
                )
                .map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-colors hover:text-[var(--color-hover)] ${
                      isActive(link.href)
                        ? 'text-[var(--color-hover)] border-b-2 border-[var(--color-hover)] pb-1'
                        : 'text-[var(--gray-color)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
            </SignedOut>

            {/* Mobile Auth */}
            <div className='flex flex-col gap-2 mt-4'>
              <SignedIn>
                <div className='flex items-center gap-2'>
                  <span className='text-sm text-[var(--gray-color)]'>
                    Account:
                  </span>
                  <UserButton afterSignOutUrl='/' />
                </div>
              </SignedIn>

              <SignedOut>
                <SignInButton mode='modal'>
                  <button
                    className='w-full px-4 py-2 rounded-lg text-sm text-[var(--color)] border border-[var(--color)] hover:bg-[var(--color)] hover:text-white transition-all'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode='modal'>
                  <button
                    className='w-full px-4 py-2 rounded-lg text-sm bg-[var(--color)] text-white hover:bg-[var(--color-hover)] transition-all'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
