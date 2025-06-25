'use client';
import React from 'react';
import Image from 'next/image';
import heroImg from '@/public/heroImg.png';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';
import { SignedIn, SignedOut, SignUpButton } from '@clerk/nextjs';

const HomeHero = () => {
  const router = useRouter();

  return (
    <section className='grid grid-cols-1 lg:grid-cols-2 bg-[var(--yellow-bg)] min-h-screen px-4 md:px-12 lg:pt-0 pt-6 gap-8 lg:pr-0'>
      {/* Text Content */}
      <div className='flex flex-col justify-center items-center lg:items-start text-center lg:text-left gap-6'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color)] leading-tight'>
          Learn something new every day.
        </h1>
        <p className='text-base sm:text-lg text-[var(--gray-color)]'>
          Become a professional and get ready to join the world.
        </p>

        <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start'>
          <SignedIn>
            <Button
              bgColor='var(--color)'
              hoverText='var(--color-hover)'
              hoverBg='var(--background)'
              style={{ fontSize: '16px' }}
              onClick={() => router.push('/courses')}
            >
              Browse Courses
            </Button>
          </SignedIn>

          <SignedOut>
            <SignUpButton mode='modal'>
              <button
                style={{
                  backgroundColor: 'var(--color-hover)',
                  color: 'var(--background)',
                  fontSize: '16px',
                  padding: '10px 20px',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '600',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--background)';
                  e.currentTarget.style.color = 'var(--color-hover)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-hover)';
                  e.currentTarget.style.color = 'var(--background)';
                }}
              >
                Get Started
              </button>
            </SignUpButton>
          </SignedOut>
        </div>
      </div>

      {/* Image Section */}
      <div className='flex justify-center items-end lg:justify-end lg:bottom-0 lg:items-end lg:right-0'>
        <Image
          src={heroImg}
          alt='Hero Illustration'
          width={485}
          height={385}
          className='object-contain max-w-full h-auto'
          priority
        />
      </div>
    </section>
  );
};

export default HomeHero;
