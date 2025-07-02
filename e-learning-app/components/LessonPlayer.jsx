'use client';
import React, { useState, useEffect } from 'react';
import QuizComponent from './quiz';
import YouTube from 'react-youtube';
import YouTubeCard from './youtubePlayer';
export default function LessonPlayer({ lesson, course, onLessonCompleted }) {
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [videoProgress, setVideoProgress] = useState(0);



  if (!lesson) {
    return (
      <div className='lesson-player bg-white rounded-xl shadow-md p-6'>
        <div className='text-center py-8'>Select a lesson to begin</div>
      </div>
    );
  }

  const handleQuizComplete = (result) => {
    setQuizCompleted(true);
    console.log('Quiz Results:', result);
  };

  const onPlayerStateChange = (event) => {
    const duration = event.target.getDuration();
    const currentTime = event.target.getCurrentTime();
    const percent = (currentTime / duration) * 100;
    setVideoProgress(percent);
  };

  const handleMarkComplete = () => {
    onLessonCompleted(lesson.id);
  };

  return (
    <div className='lesson-player bg-white rounded-xl shadow-md p-6'>
      <div className='video-container mb-6'>
        <div className='aspect-w-16 aspect-h-9 rounded-lg overflow-hidden'>
          {lesson.videoId ? (
            <YouTube
              key={lesson.videoId}
              videoId={lesson.videoId}
              opts={{
                width: '100%',
                height: '100%',
              }}
              onStateChange={onPlayerStateChange}
            />
          ) : (
            <div className='flex items-center justify-center h-full bg-gray-100'>
              <p className='text-gray-500'>Video not available</p>
            </div>
          )}
        </div>
      </div>

      <div className='lesson-header mb-6'>
        <h2 className='text-2xl font-bold text-gray-800 mb-2'>
          {lesson.title}
        </h2>
        <p className='text-gray-600'>{lesson.description}</p>
      </div>

      <div className='mt-4 mb-6'>
        <div className='flex justify-between text-sm mb-1'>
          <span>Lesson Progress</span>
          <span>{Math.round(videoProgress)}%</span>
        </div>
        <div className='w-full bg-gray-200 rounded-full h-2'>
          <div
            className='bg-blue-600 h-2 rounded-full'
            style={{ width: `${videoProgress}%` }}
          ></div>
        </div>
      </div>

      <div className='quiz-section'>
        <h3 className='text-xl font-bold mb-4'>Lesson Quiz</h3>
        <QuizComponent
          questions={lesson.quiz}
          onQuizComplete={handleQuizComplete}
        />
      </div>

      {(!lesson.quiz || lesson.quiz.length === 0) && (
        <div className='mt-6 text-center'>
          <button
            onClick={handleMarkComplete}
            className='px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700'
          >
            Mark Lesson as Completed
          </button>
        </div>
      )}
    </div>
  );
}
