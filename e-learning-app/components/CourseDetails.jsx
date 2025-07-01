'use client';
import React, { useState, useEffect } from 'react';
import LessonPlayer from './LessonPlayer';
import courses from '@/data/coursesData';
import Image from 'next/image';

export default function CourseDetails({ course, onClose, onCourseUpdate }) {
  const [currentCourse, setCurrentCourse] = useState(course);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const handleLessonComplete = (lessonId) => {
    const updatedLessons = currentCourse.lessons.map((lesson) =>
      lesson.id === lessonId ? { ...lesson, status: 'completed' } : lesson
    );

    const updatedCourse = { ...currentCourse, lessons: updatedLessons };
    setCurrentCourse(updatedCourse);

    if (onCourseUpdate) {
      onCourseUpdate(updatedCourse);
    }
  };

  // Find related courses by category, excluding the current course
  const relatedCourses = courses.filter(
    (c) => c.category === course.category && c.id !== course.id
  );

  // Handle lesson selection
  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };

  // Helper function to calculate course progress
  const calculateCourseProgress = (course) => {
    const totalLessons = course.lessons.length;
    const completedLessons = course.lessons.filter(
      (lesson) => lesson.status === 'completed'
    ).length;

    return Math.round((completedLessons / totalLessons) * 100);
  };

  useEffect(() => {
    const progress = calculateCourseProgress(currentCourse);
    const status = progress === 100 ? 'completed' : 'in-progress';
    setCurrentCourse((prev) => ({
      ...prev,
      progress,
      status,
    }));
  }, [currentCourse.lessons]);


  return (
    <div className='fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center items-center p-4'>
      {' '}
      <div className='bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='p-6 relative'>
          <button
            onClick={onClose}
            className='fixed top-4 right-4 hover:text-gray-500 text-[var(--background)] rounded-full p-2 transition-colors'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Left Column - Course Content */}
            <div className='lg:col-span-2'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h1 className='text-3xl font-bold text-gray-800'>
                    {course.title}
                  </h1>
                  <div className='flex items-center mt-2'>
                    <div className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                      {course.category.toUpperCase()}
                    </div>
                    <div className='ml-3 flex items-center'>
                      <span className='text-yellow-500 mr-1'>★</span>
                      <span className='text-sm font-medium text-gray-700'>
                        {course.rating || '4.8'}
                      </span>
                      <span className='text-sm text-gray-500 ml-1'>
                        ({course.ratingsCount || '12'} ratings)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center mb-6'>
                <div className='bg-gray-200 border-2 border-dashed rounded-xl w-12 h-12' />
                <div className='ml-3'>
                  <h3 className='font-medium text-gray-800'>
                    {course.instructor || 'Steven Arnatouvic'}
                  </h3>
                  <p className='text-sm text-gray-600'>
                    Development / Mobile Engineer
                  </p>
                </div>
              </div>

              <div className='bg-gray-50 rounded-lg p-4 mb-6'>
                <h2 className='text-xl font-bold mb-3'>Course Overview</h2>
                <p className='text-gray-700'>{course.description}</p>
              </div>

              {/* Curriculum section */}
              <div className='mb-6'>
                <h2 className='text-xl font-bold mb-4'>Curriculum</h2>
                <div className='space-y-3'>
                  {currentCourse.lessons.map((lesson, index) => (
                    <div
                      key={lesson.id}
                      className={`border rounded-lg p-4 cursor-pointer transition ${
                        selectedLesson?.id === lesson.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:bg-gray-50'
                      } ${lesson.status === 'completed' ? 'bg-green-50' : ''}`}
                      onClick={() => handleLessonSelect(lesson)}
                    >
                      <div className='flex justify-between items-center'>
                        <h3 className='font-medium text-gray-800'>
                          Lesson {index + 1}: {lesson.title}
                        </h3>
                        <span className='text-sm text-gray-500'>
                          {lesson.duration || '15 min'}
                        </span>
                      </div>
                      <p className='text-sm text-gray-600 mt-1'>
                        {lesson.description}
                      </p>
                      <div className='mt-2 flex gap-2'>
                        {lesson.status === 'completed' && (
                          <span className='text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full'>
                            Completed
                          </span>
                        )}
                        {lesson.status === 'in-progress' && (
                          <span className='text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full'>
                            In Progress
                          </span>
                        )}
                        {lesson.quiz?.length > 0 && (
                          <span className='text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full'>
                            Quiz: {lesson.quiz.length} Qs
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Lesson Player Section */}
              {selectedLesson && (
                <LessonPlayer
                  lesson={selectedLesson}
                  course={currentCourse}
                  onLessonCompleted={handleLessonComplete} 
                />
              )}
            </div>

            {/* Right Column - Related Courses */}
            <div className='bg-gray-50 rounded-lg p-4'>
              <h3 className='text-lg font-semibold mb-3'>Related Courses</h3>
              <div className='space-y-4'>
                {relatedCourses.map((rc) => (
                  <div
                    key={rc.id}
                    className='flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow'
                  >
                    <div className='bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16' />
                    <div className='flex-1'>
                      <h4 className='font-medium text-gray-800'>{rc.title}</h4>
                      <p className='text-sm text-gray-600'>{rc.category}</p>
                      <div className='flex items-center mt-1'>
                        <span className='text-yellow-500 text-sm mr-1'>★</span>
                        <span className='text-xs text-gray-700'>
                          {rc.rating || '4.5'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
