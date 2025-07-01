'use client'
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Card from './card';
import CourseDetails from './CourseDetails';
import courses from '@/data/coursesData';
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Button from './button';

const CourseInProgress = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [allCourses, setAllCourses] = useState([]);
  const router = useRouter();

  // Initialize state from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('courses');
    if (saved) {
      setAllCourses(JSON.parse(saved));
    } else {
      // Fallback to coursesData if no localStorage
      setAllCourses(courses);
    }
  }, []);

  const addCourse = (courseId) => {
    setAllCourses((prev) =>
      prev.map((c) =>
        c.id === courseId
          ? { ...c, isAdded: true, status: 'in-progress', progress: 0 }
          : c
      )
    );
  };

  const removeCourse = (courseId) => {
    setAllCourses((prev) =>
      prev.map((c) =>
        c.id === courseId
          ? { ...c, isAdded: false, status: 'not-started', progress: 0 }
          : c
      )
    );
  };

  const handleViewCourse = (course) => {
    setSelectedCourse(course);
  };

  const handleCloseCourseDetails = () => {
    setSelectedCourse(null);
  };

  const handleLessonComplete = (courseId, lessonId) => {
    setAllCourses((prev) =>
      prev.map((c) => {
        if (c.id === courseId) {
          const updatedLessons = c.lessons.map((lesson) =>
            lesson.id === lessonId ? { ...lesson, completed: true } : lesson
          );

          const completedCount = updatedLessons.filter(
            (l) => l.completed
          ).length;
          const progress = (completedCount / updatedLessons.length) * 100;

          return {
            ...c,
            lessons: updatedLessons,
            progress,
            status: progress === 100 ? 'completed' : 'in-progress',
          };
        }
        return c;
      })
    );
  };



  // Save to localStorage when courses change
  useEffect(() => {
    if (allCourses.length > 0) {
      localStorage.setItem('courses', JSON.stringify(allCourses));
    }
  }, [allCourses]);

  // Filter only in-progress courses
  const filteredCourses = allCourses.filter(
    (course) => course.isAdded && course.status === 'in-progress'
  );
  const updateCourse = (updatedCourse) => {
    setAllCourses((prev) =>
      prev.map((c) => (c.id === updatedCourse.id ? updatedCourse : c))
    );
  };

  return (
    <section className='py-12'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl font-bold mb-8'>Courses in Progress</h2>
        <div className='courses-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Card
                key={course.id}
                course={course}
                onAdd={addCourse}
                onRemove={removeCourse}
                onView={handleViewCourse}
                showAddButton={false}
              />
            ))
          ) : (
            <div className='no-courses col-span-full py-12 text-center'>
              <div className='max-w-md mx-auto'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-16 w-16 mx-auto text-gray-400 mb-4'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                  No courses in progress
                </h3>
                <p className='text-gray-600 mb-4'>
                  Start a new course to see it here!
                </p>
                <Button
                  bgColor='var(--color)'
                  hoverText='var(--background)'
                  hoverBg='var(--color-hover)'
                  style={{ fontSize: '16px' }}
                  onClick={() => router.push('/pages/dashboard')}
                >
                  Browse Courses
                </Button>
              </div>
            </div>
          )}
        </div>

        {selectedCourse && (
          <CourseDetails
            course={selectedCourse}
            onClose={handleCloseCourseDetails}
            onCourseUpdate={updateCourse}
            onLessonCompleted={handleLessonComplete}
          />
        )}
      </div>
    </section>
  );
};

export default CourseInProgress;
