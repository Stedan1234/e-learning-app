'use client';
import React, { useState, useEffect } from 'react';
import coursesData from '@/data/coursesData';
import Card from '@/components/card';
import {
  getAllCourses,
  getUserCourses,
  getCompletedCourses,
  getInProgressCourses,
  searchCourses,
  getCoursesByCategory,
} from '@/lib/courseUtils';
import CourseDetails from '@/components/CourseDetails';

const TABS = ['all', 'my', 'in-progress', 'completed'];

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('all');
  const [courses, setCourses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Load courses from localStorage or fallback to default
  useEffect(() => {
    const saved = localStorage.getItem('courses');
    setCourses(saved ? JSON.parse(saved) : coursesData);
  }, []);

  // Persist to localStorage when courses update
  useEffect(() => {
    if (courses.length > 0) {
      localStorage.setItem('courses', JSON.stringify(courses));
    }
  }, [courses]);

  const handleViewCourse = (course) => {
    setSelectedCourse(course);
  };

  const closeCourseDetails = () => {
    setSelectedCourse(null);
  };

  const categories = ['all', ...new Set(courses.map((c) => c.category))];

  const addCourse = (id) => {
    setIsLoading(true);
    setTimeout(() => {
      setCourses((prev) =>
        prev.map((course) =>
          course.id === id
            ? { ...course, isAdded: true, status: 'not-started' }
            : course
        )
      );
      setIsLoading(false);
    }, 500);
  };

  const removeCourse = (id) => {
    setCourses((prev) =>
      prev.map((course) =>
        course.id === id
          ? { ...course, isAdded: false, status: 'not-started', progress: 0 }
          : course
      )
    );
  };

  const getFilteredCourses = () => {
    let filtered = [];

    switch (activeTab) {
      case 'my':
        filtered = getUserCourses(courses);
        break;
      case 'in-progress':
        filtered = getInProgressCourses(courses);
        break;
      case 'completed':
        filtered = getCompletedCourses(courses);
        break;
      default:
        filtered = getAllCourses(courses);
    }

    if (searchTerm) filtered = searchCourses(filtered, searchTerm);
    if (selectedCategory !== 'all')
      filtered = getCoursesByCategory(filtered, selectedCategory);

    return filtered;
  };

  const stats = {
    total: courses.length,
    enrolled: getUserCourses(courses).length,
    completed: getCompletedCourses(courses).length,
    inProgress: getInProgressCourses(courses).length,
  };

  const filteredCourses = getFilteredCourses();

  return (
    <div className='dashboard-container max-w-7xl mx-auto px-4 py-8'>
      <header className='dashboard-header mb-8'>
        <h1 className='text-3xl font-bold mb-4'>Learning Dashboard</h1>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 mb-6'>
          {Object.entries(stats).map(([key, value]) => (
            <div
              key={key}
              className='stat-card bg-white p-4 rounded-lg shadow-sm border border-gray-100'
            >
              <h3 className='text-2xl font-bold text-[var(--color-hover)]'>
                {value}
              </h3>
              <p className='text-sm text-gray-600 capitalize mt-1'>
                {key.replace(/([A-Z])/g, ' $1')}
              </p>
            </div>
          ))}
        </div>
      </header>

      <section className='filters-section mb-6 flex flex-col md:flex-row gap-4'>
        <input
          type='text'
          placeholder='Search courses...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-input flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-hover)] focus:[var(--color-hover)] outline-none'
        />

        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className='category-select px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--color-hover)] focus:[var(--color-hover)] outline-none'
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category === 'all'
                ? 'All Categories'
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </section>

      <nav className='tab-navigation mb-6 flex flex-wrap gap-2'>
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab-button px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab
                ? 'bg-[var(--color-hover)] text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace('-', ' ').toUpperCase()} (
            {(() => {
              switch (tab) {
                case 'my':
                  return stats.enrolled;
                case 'in-progress':
                  return stats.inProgress;
                case 'completed':
                  return stats.completed;
                default:
                  return stats.total;
              }
            })()}
            )
          </button>
        ))}
      </nav>

      <section className='results-header mb-4 flex justify-between items-center'>
        <div>
          <h2 className='text-xl font-semibold capitalize'>
            {activeTab.replace('-', ' ')} Courses
          </h2>
          <p className='text-gray-600 text-sm'>
            {filteredCourses.length} course
            {filteredCourses.length !== 1 ? 's' : ''} found
          </p>
        </div>
        {(searchTerm || selectedCategory !== 'all') && (
          <button
            className='text-sm px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200'
            onClick={() => {
              setSearchTerm('');
              setSelectedCategory('all');
            }}
          >
            Clear Filters
          </button>
        )}
      </section>

      {isLoading ? (
        <div className='loading-overlay flex justify-center items-center py-16'>
          <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 [var(--color-hover)]'></div>
        </div>
      ) : (
        <div className='courses-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <Card
                key={course.id}
                course={course}
                onAdd={addCourse}
                onRemove={removeCourse}
                onView={handleViewCourse}
                showAddButton={activeTab === 'all'}
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
                  No courses found
                </h3>
                <p className='text-gray-600 mb-4'>
                  Try changing your filters or search keywords
                </p>
              </div>
            </div>
          )}
        </div>
      )}
      {/* Course Details Overlay */}
      {selectedCourse && (
        <CourseDetails
          course={selectedCourse}
          onClose={closeCourseDetails}
          courses={courses}
        />
      )}
    </div>
  );
}
