'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
export default function Card({
  course,
  onAdd,
  onRemove,
  showAddButton,
  onView,
}) {
  // Remove router functionality
  const handleViewCourse = (e) => {
    e.stopPropagation();
    onView(course);
  };

  return (
    <div
      className='bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200 cursor-pointer transition hover:shadow-md'
      // onClick={handleViewCourse}
      // role='button'
    >
      {/* Course Thumbnail */}
      <div className='h-48 bg-gray-200 border-b border-gray-200 relative'>
        {course.thumbnail ? (
          <Image
            src={course.thumbnail}
            alt={course.title}
            layout='fill'
            objectFit='cover'
          />
        ) : (
          <div className='flex items-center justify-center w-full h-full text-gray-400'>
            <span>No Image</span>
          </div>
        )}
        <div className='absolute top-2 right-2 bg-blue-100 text-[var(--color-hover)] text-xs font-medium px-2.5 py-0.5 rounded-full'>
          {course.category?.toUpperCase()}
        </div>
      </div>

      {/* Course Content */}
      <div className='p-4'>
        <h3 className='font-semibold text-lg text-gray-800'>{course.title}</h3>
        <p className='text-sm text-gray-600 mt-1 line-clamp-2'>
          {course.description}
        </p>

        {/* Progress bar for enrolled courses */}
        {course.isAdded && course.status === 'in-progress' && (
          <div className='mt-4'>
            <div className='flex justify-between text-sm mb-1'>
              <span>Progress</span>
              <span className='font-medium'>{course.progress}%</span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2'>
              <div
                className='bg-[var(--color)] h-2 rounded-full'
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className='mt-4 flex justify-end gap-2'>
          <button
            onClick={handleViewCourse}
            className='px-3 py-1 bg-gray-100 text-gray-800 hover:bg-gray-200 rounded text-sm transition-colors'
            type='button'
          >
            View Course
          </button>
          {course.isAdded ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onRemove(course.id);
              }}
              className='px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200 rounded text-sm transition-colors'
              type='button'
            >
              Remove
            </button>
          ) : showAddButton ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onAdd(course.id);
              }}
              className='px-3 py-1 bg-[var(--color)] text-white hover:bg-[var(--color-hover)] rounded text-sm transition-colors'
              type='button'
            >
              Add Course
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
