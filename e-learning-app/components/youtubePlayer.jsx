'use client';
import courses from '@/data/coursesData';
// import Image from 'next/image';
import React from 'react';

const YouTubeCard = ({ videoId }) => {
  if (!videoId) {
    return (
      <div className='flex items-center justify-center h-full bg-gray-100 rounded-lg'>
        <p className='text-gray-500'>Video not available</p>
      </div>
    );
  }
  return (
    <div className='w-full h-full'>
      <iframe
        src={`https://www.youtube.com/embed/${videoId}`}
        title='YouTube video'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen
        className='w-full h-full rounded-lg'
      />
    </div>
  );
};

export default YouTubeCard;