'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import CourseDetails from './CourseDetails';
import courses from '@/data/coursesData';
import { SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';
import { AiOutlineArrowRight } from 'react-icons/ai';

const TrendingCourses = () => {
    const [selectedCourse, setSelectedCourse] = useState(null);

    // Define trending courses (IDs of popular courses)
    const trendingCourseIds = [1, 3, 5, 7];
    const trendingCourses = courses.filter((course) =>
        trendingCourseIds.includes(course.id)
    );

    const [addedCourses, setAddedCourses] = useState([]);

    const handleAddCourse = (course) => {
        if (!addedCourses.includes(course.id)) {
            setAddedCourses([...addedCourses, course.id]);
        }
    };

    const handleRemoveCourse = (course) => {
        setAddedCourses(addedCourses.filter((id) => id !== course.id));
    };

    const handleViewCourse = (course) => {
        setSelectedCourse(course);
    };

    const handleCloseCourseDetails = () => {
        setSelectedCourse(null);
    };

    return (
        <section className='py-12 bg-[var(--background)]'>
            <div className='container mx-auto px-4'>
                <div className='flex justify-between items-center mb-8'>
                    <h2 className='text-2xl font-bold text-[var(--foreground)]'>Trending Courses</h2>
                    <SignedIn>
                        <Link
                            href='/pages/dashboard'
                            className='text-[var(--primary)] hover:text-[var(--primary-hover)] transition-colors flex items-center'
                        >
                            View All <AiOutlineArrowRight className='ml-1' />
                        </Link>
                    </SignedIn>
                    <SignedOut>
                        <SignInButton
                            mode='modal'
                            fallbackRedirectUrl='/pages/dashboard'
                            className='px-4 py-2 bg-[var(--primary)] text-[var(--background)] rounded hover:bg-[var(--color-hover)] transition-colors'
                        >
                            Login to view all courses
                        </SignInButton>
                    </SignedOut>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                    {trendingCourses.map((course) => (
                        <div
                            key={course.id}
                            className='bg-[var(--card)] rounded-lg shadow-sm overflow-hidden border border-[var(--border)]'
                        >
                            {/* Course Thumbnail */}
                            <div className='h-48 bg-[var(--muted)] border-b border-[var(--border)] relative'>
                                {course.thumbnail ? (
                                    <Image
                                        src={course.thumbnail}
                                        alt={course.title}
                                        layout='fill'
                                        objectFit='cover'
                                    />
                                ) : (
                                    <div className='flex items-center justify-center w-full h-full text-[var(--muted-foreground)]'>
                                        <span>No Image</span>
                                    </div>
                                )}
                                <div className='absolute top-2 right-2 bg-[var(--primary-light)] text-[var(--primary)] text-xs font-medium px-2.5 py-0.5 rounded-full'>
                                    {course.category?.toUpperCase()}
                                </div>
                            </div>

                            {/* Course Content */}
                            <div className='p-4'>
                                <h3 className='font-semibold text-lg text-[var(--foreground)] mb-2'>
                                    {course.title}
                                </h3>
                                <p className='text-sm text-[var(--muted-foreground)] mb-4 line-clamp-2'>
                                    {course.description}
                                </p>

                                <div className='flex justify-between gap-2'>
                                    <button
                                        onClick={() => handleViewCourse(course)}
                                        className='px-3 py-1 bg-[var(--muted)] text-[var(--foreground)] hover:bg-[var(--color-hover)] rounded text-sm transition-colors flex-1'
                                    >
                                        View Details
                                    </button>
                                    <SignedOut>
                                        <SignInButton
                                            mode='modal'
                                            fallbackRedirectUrl='/pages/dashboard'
                                        >
                                            <button className='px-3 py-1 bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--color-hover)] rounded text-sm transition-colors flex-1'>
                                                Enroll Now
                                            </button>
                                        </SignInButton>
                                    </SignedOut>
                                    <SignedIn>
                                        {addedCourses.includes(course.id) ? (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemoveCourse(course);
                                                }}
                                                className='px-3 py-1 bg-[var(--destructive-light)] text-[var(--destructive)] hover:bg-[var(--destructive-hover)] rounded text-sm transition-colors'
                                                type='button'
                                            >
                                                Remove
                                            </button>
                                        ) : (
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleAddCourse(course);
                                                }}
                                                className='px-3 py-1 bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--primary-hover)] rounded text-sm transition-colors'
                                                type='button'
                                            >
                                                Add Course
                                            </button>
                                        )}
                                    </SignedIn>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedCourse && (
                    <CourseDetails
                        course={selectedCourse}
                        onClose={handleCloseCourseDetails}
                    />
                )}
            </div>
        </section>
    );
};

export default TrendingCourses;
