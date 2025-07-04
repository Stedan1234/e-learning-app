// Utility functions for course management

// export const getInProgressCourses = (courses) =>
//     courses.filter(course => course.status === "in-progress");

// export const getCompletedCourses = (courses) =>
//     courses.filter(course => course.status === "completed");

export const calculateCourseProgress = (course) => {
    if (!course.lessons || course.lessons.length === 0) return 0;

    const completedLessons = course.lessons.filter(
        lesson => lesson.status === 'completed'
    ).length;

    return Math.round((completedLessons / course.lessons.length) * 100);
  };

export const getNotStartedCourses = (courses) =>
    courses.filter(course => course.status === "not-started");

export const getRecommendedCourses = (courses) =>
    courses.filter(course => !course.isAdded).slice(0, 3);

export const getAllCourses = (courses) => courses;

// export const getUserCourses = (courses) =>
//     courses.filter(course => course.isAdded);

export const getCourseById = (courses, id) =>
    courses.find(course => course.id === parseInt(id));
export const getCoursesByCategory = (courses, category) =>
    courses.filter(course => course.category === category);

export const searchCourses = (courses, searchTerm) =>
    courses.filter(course =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

export const getLessonById = (courseId, lessonId) => {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return null;
    return course.lessons.find(l => l.id === lessonId) || null;
};

export const updateLessonStatus = (courseId, lessonId, status) => {
    const course = coursesData.find(c => c.id === courseId);
    if (!course) return;

    const lesson = course.lessons.find(l => l.id === lessonId);
    if (lesson) {
        lesson.status = status;
    }
};
      

    

export const updateCourseProgress = (courses, courseId, progress) =>
    courses.map(course =>
        course.id === courseId
            ? { ...course, progress, status: progress === 100 ? 'completed' : 'in-progress' }
            : course
    );

export const markLessonComplete = (courses, courseId, lessonId) =>
    courses.map(course => {
        if (course.id === courseId) {
            const updatedLessons = course.lessons.map(lesson =>
                lesson.id === lessonId ? { ...lesson, status: 'completed' } : lesson
            );

            const progress = calculateCourseProgress({
                ...course,
                lessons: updatedLessons
            });

            return {
                ...course,
                lessons: updatedLessons,
                progress,
                status: progress === 100 ? 'completed' : 'in-progress'
            };
        }
        return course;
        });


export const getUserCourses = (courses) => {
    return courses.filter(course => course.isAdded);
};

export const getInProgressCourses = (courses) => {
    return courses.filter(course => course.isAdded && course.status === 'in-progress');
};

export const getCompletedCourses = (courses) => {
    return courses.filter(course => course.isAdded && course.status === 'completed');
      };