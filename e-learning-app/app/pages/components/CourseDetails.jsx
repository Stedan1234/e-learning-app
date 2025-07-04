'use client';
import React, { useState, useEffect } from 'react';
import LessonPlayer from './LessonPlayer';
import courses from '@/data/coursesData';
import Image from 'next/image';
import { getLessonById, updateLessonStatus } from '@/lib/courseUtils';
import { AiOutlineClose } from 'react-icons/ai';

export default function CourseDetails({ course, onClose, onCourseUpdate }) {
  const [currentCourse, setCurrentCourse] = useState(course);
  const [selectedLesson, setSelectedLesson] = useState(null);

  useEffect(() => {
    if (currentCourse && currentCourse.lessons.length > 0) {
      setSelectedLesson(currentCourse.lessons[0]);
    }
  }, [currentCourse]);

  const handleLessonComplete = (lessonId) => {
    const updatedLessons = currentCourse.lessons.map((lesson) =>
      lesson.id === lessonId ? { ...lesson, status: 'completed' } : lesson
    );

    const completedCount = updatedLessons.filter(
      (l) => l.status === 'completed'
    ).length;
    const progress = Math.round((completedCount / updatedLessons.length) * 100);
    const status = progress === 100 ? 'completed' : 'in-progress';

    const updatedCourse = {
      ...currentCourse,
      lessons: updatedLessons,
      progress,
      status,
    };

    setCurrentCourse(updatedCourse);

    if (onCourseUpdate) {
      onCourseUpdate(updatedCourse);
    }
  };

  const relatedCourses = courses.filter(
    (c) => c.category === course.category && c.id !== course.id
  );

  const handleLessonSelect = (lesson) => {
    setSelectedLesson(lesson);
  };

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
      <div className='bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto'>
        <div className='p-6 relative'>
          <button
            onClick={onClose}
            className='fixed top-4 right-4 text-[var(--color-hover)] hover:text-gray-500 rounded-full p-5 transition-colors'
          >
            <AiOutlineClose />
          </button>

          <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
            {/* Left Column - Course Content */}
            <div className='lg:col-span-2'>
              <div className='flex justify-between items-start mb-4'>
                <div>
                  <h1 className='text-3xl font-bold text-gray-800'>
                    {currentCourse.title}
                  </h1>
                  <div className='flex items-center mt-2'>
                    <div className='bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full'>
                      {currentCourse.category.toUpperCase()}
                    </div>
                    <div className='ml-3 flex items-center'>
                      <span className='text-yellow-500 mr-1'>★</span>
                      <span className='text-sm font-medium text-gray-700'>
                        {currentCourse.rating || '4.8'}
                      </span>
                      <span className='text-sm text-gray-500 ml-1'>
                        ({currentCourse.ratingsCount || '12'} ratings)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex items-center mb-6'>
                  <Image
                    src='/drFreeman.jpeg'
                    alt='Dr. Freeman'
                    width={100}
                    height={100}
                    className='bg-gray-200 border-2 border-dashed rounded-xl'
                  />
                <div className='ml-3'>
                  <h3 className='font-medium text-gray-800'>
                    {currentCourse.instructor || 'Prof. Freeman'}
                  </h3>
                  <p className='text-sm text-gray-600'>
                    Development / Mobile Engineer
                  </p>
                </div>
              </div>

              <div className='bg-gray-50 rounded-lg p-4 mb-6'>
                <h2 className='text-xl font-bold mb-3'>Course Overview</h2>
                <p className='text-gray-700'>{currentCourse.description}</p>
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
                  key={selectedLesson.id} // Add this key
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
                      <Image
                        src={rc.thumbnail || '/drFreeman.jpeg'}
                        alt={rc.title}
                        width={100}
                        height={100}
                        className='bg-gray-200 border-2 border-dashed rounded-xl'
                      />
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
