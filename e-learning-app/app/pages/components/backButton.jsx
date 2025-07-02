'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';

const BackButton = ({ customAction = null, label = 'Back' }) => {
  const router = useRouter();

  const handleBack = () => {
    if (customAction) {
      customAction();
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleBack}
      className='flex items-center gap-2 text-[var(--gray-color)] hover:text-[var(--color-hover)] transition-colors py-2'
    >
      <ArrowLeft className='w-4 h-4' />
      <span className='text-sm font-medium'>{label}</span>
    </button>
  );
};

export default BackButton;
