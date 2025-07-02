'use client';
import React from 'react';
import Button from './button';
const UpdateBanner = () => {
  return (
    <div className='flex flex-row justify-between items-center mx-auto w-full bg-blue-100 text-blue-800 p-4 rounded-lg shadow-md m-8 max-md:flex-col max-md:items-start max-md:gap-4'>
      <div className=' '>
        <h2 className='text-lg font-semibold'>
          Join and get all updates on new courses{' '}
        </h2>
        <p className='text-sm'>By some of our top lecturers</p>
      </div>
      <div className='flex flex-row gap-1'>
        <input
          type='email'
          placeholder='Enter your email'
          className='border-gray-300 rounded px-3 py-2 bg-[#F9F9F9] text-[var(--gray-color)] opacity-50'
        />
        <Button
          bgColor='var(--color)'
          hoverText='var(--background)'
          hoverBg='var(--color-hover)'
          type='submit'
          style={{ fontSize: '16px' }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default UpdateBanner;
