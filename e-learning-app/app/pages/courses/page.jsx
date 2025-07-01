import courses from '@/data/coursesData';

export default function Page({ params }) {
  const { id } = params;
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className='flex justify-center items-center min-h-screen'>
        <p className='text-xl'>Course not found</p>
      </div>
    );
  }

  const relatedCourses = courses
    .filter((c) => c.category === course.category && c.id !== course.id)
    .slice(0, 4);

  return (
    <div>
      <h1>{course.title}</h1>
      <p>{course.description}</p>
      <h2>Related Courses</h2>
      <ul>
        {relatedCourses.map((rc) => (
          <li key={rc.id}>{rc.title}</li>
        ))}
      </ul>
    </div>
  );
}