'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = ({ customItems = null }) => {
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    if (customItems) return customItems;

    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs = [
      { label: 'Home', href: '/' },
      { label: 'Courses', href: '/courses' },
      { label: course?.title || 'Course', href: `/course/${params.id}` },
    ];

    let currentPath = '';
    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;

      // Capitalize and format segment
      const label = segment
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

      breadcrumbs.push({
        label,
        href: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (breadcrumbs.length <= 1) return null;

  return (
    <nav className='flex items-center space-x-2 text-sm text-[var(--gray-color)] py-4'>
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={item.href}>
          {index === 0 ? (
            <Link
              href={item.href}
              className='flex items-center hover:text-[var(--color-hover)] transition-colors'
            >
              <Home className='w-4 h-4' />
            </Link>
          ) : (
            <>
              <ChevronRight className='w-4 h-4' />
              {index === breadcrumbs.length - 1 ? (
                <span className='text-[var(--color)] font-medium'>
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className='hover:text-[var(--color-hover)] transition-colors'
                >
                  {item.label}
                </Link>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
