'use client';
import React, { useState } from 'react';

const QuizComponent = ({ questions, onQuizComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  const handleAnswerSelect = (optionIndex) => {
    setSelectedAnswer(optionIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    // Record user answer
    const isCorrect = selectedAnswer === questions[currentQuestion].answer;
    const newUserAnswers = [
      ...userAnswers,
      {
        questionIndex: currentQuestion,
        selectedOption: selectedAnswer,
        isCorrect,
      },
    ];
    setUserAnswers(newUserAnswers);
    setSelectedAnswer(null);

    // Move to next question or complete quiz
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizCompleted(true);
      // Calculate results
      const correctCount = newUserAnswers.filter((ans) => ans.isCorrect).length;
      onQuizComplete({
        totalQuestions: questions.length,
        correctAnswers: correctCount,
        score: (correctCount / questions.length) * 100,
      });
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      // Restore previous answer if available
      const prevAnswer = userAnswers.find(
        (ans) => ans.questionIndex === currentQuestion - 1
      );
      setSelectedAnswer(prevAnswer ? prevAnswer.selectedOption : null);
    }
  };

  const getOptionClass = (optionIndex) => {
    if (!quizCompleted) {
      return selectedAnswer === optionIndex
        ? 'bg-blue-100 border-blue-500'
        : 'hover:bg-gray-50 border-gray-200';
    }

    // After quiz completion
    if (optionIndex === questions[currentQuestion].answer) {
      return 'bg-green-100 border-green-500';
    }
    if (
      selectedAnswer === optionIndex &&
      userAnswers[currentQuestion]?.selectedOption === optionIndex &&
      !userAnswers[currentQuestion]?.isCorrect
    ) {
      return 'bg-red-100 border-red-500';
    }
    return 'border-gray-200';
  };

  // Guard against empty questions
  if (!questions || questions.length === 0) {
    return (
      <div className='quiz-container bg-gray-50 rounded-lg p-6'>
        <p className='text-center text-gray-500'>No quiz questions available</p>
      </div>
    );
  }

  return (
    <div className='quiz-container bg-gray-50 rounded-lg p-6'>
      {!quizCompleted ? (
        <div className='quiz-content'>
          <div className='quiz-header mb-6'>
            <div className='flex justify-between items-center mb-2'>
              <h3 className='font-medium text-gray-700'>
                Question {currentQuestion + 1} of {questions.length}
              </h3>
              <span className='text-sm font-medium text-blue-600'>
                {Math.round((currentQuestion / questions.length) * 100)}%
                Complete
              </span>
            </div>
            <div className='w-full bg-gray-200 rounded-full h-2'>
              <div
                className='bg-blue-600 h-2 rounded-full'
                style={{
                  width: `${(currentQuestion / questions.length) * 100}%`,
                }}
              ></div>
            </div>
          </div>

          <div className='question-section mb-6'>
            <h4 className='question-text text-lg font-medium text-gray-800 mb-4'>
              {questions[currentQuestion].question}
            </h4>

            <div className='options-list space-y-3'>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  className={`option-button w-full text-left p-4 rounded-lg border ${getOptionClass(
                    index
                  )} transition-colors`}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={quizCompleted}
                >
                  <div className='flex items-start'>
                    <span className='option-letter font-medium mr-3 text-gray-600'>
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className='option-text'>{option}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className='navigation-buttons flex justify-between'>
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className='px-5 py-2.5 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              disabled={selectedAnswer === null}
              className='px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed'
            >
              {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      ) : (
        <div className='quiz-results text-center py-8'>
          <h3 className='text-2xl font-bold text-gray-800 mb-2'>
            Quiz Completed!
          </h3>
          <p className='text-lg text-gray-600 mb-6'>
            You scored:{' '}
            <span className='font-semibold'>
              {userAnswers.filter((ans) => ans.isCorrect).length}
            </span>{' '}
            out of {questions.length}
          </p>
          <button
            onClick={() => {
              setCurrentQuestion(0);
              setSelectedAnswer(null);
              setUserAnswers([]);
              setQuizCompleted(false);
            }}
            className='px-5 py-2.5 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700'
          >
            Retake Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizComponent;
