'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CourseNavigation = ({ courseId, currentTab = 'overview' }) => {
  const pathname = usePathname();

  const tabs = [
    { id: 'overview', label: 'Overview', href: `/course/${courseId}` },
    { id: 'lessons', label: 'Lessons', href: `/course/${courseId}/lessons` },
    {
      id: 'assignments',
      label: 'Assignments',
      href: `/course/${courseId}/assignments`,
    },
    {
      id: 'discussion',
      label: 'Discussion',
      href: `/course/${courseId}/discussion`,
    },
    { id: 'progress', label: 'Progress', href: `/course/${courseId}/progress` },
  ];

  return (
    <div className='border-b border-gray-200 bg-white sticky top-16 z-40'>
      <div className='max-w-7xl mx-auto px-4'>
        <nav className='flex space-x-8'>
          {tabs.map((tab) => (
            <Link
              key={tab.id}
              href={tab.href}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                pathname === tab.href || currentTab === tab.id
                  ? 'border-[var(--color-hover)] text-[var(--color-hover)]'
                  : 'border-transparent text-[var(--gray-color)] hover:text-[var(--color)] hover:border-gray-300'
              }`}
            >
              {tab.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default CourseNavigation;
