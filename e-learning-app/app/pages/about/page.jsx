'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { teamMembers } from '@/data/teamData';

const AboutUs = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-extrabold text-gray-900 text-center mb-4'>
          About Our Team
        </h1>
        <p className='text-lg text-gray-600 text-center mb-12'>
          Meet the talented individuals behind our success
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {teamMembers.map((member) => (
            <div
              key={member.id}
              role='button'
              aria-expanded={expandedId === member.id}
              className={`bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-all duration-300 transform ${
                expandedId === member.id
                  ? 'ring-2 ring-indigo-500 scale-105'
                  : 'hover:shadow-lg hover:scale-105'
              }`}
              onClick={() => toggleExpand(member.id)}
            >
              <div className='p-6'>
                <div className='flex items-center'>
                  <div className='w-16 h-16 relative rounded-xl overflow-hidden border-2 border-gray-200'>
                    <Image
                      src='/images/default-avatar.png' // Replace with member.image if you add image keys
                      alt={member.name}
                      layout='fill'
                      objectFit='cover'
                    />
                  </div>
                  <div className='ml-4'>
                    <h3 className='text-lg font-bold text-gray-900'>
                      {member.name}
                    </h3>
                    <p className='text-indigo-600'>{member.role}</p>
                  </div>
                </div>

                {expandedId === member.id && (
                  <div className='mt-4 animate-fadeIn'>
                    <p className='text-gray-600 mb-4'>{member.description}</p>
                    <div className='flex space-x-3 flex-wrap'>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-blue-600 hover:text-blue-800'
                          onClick={(e) => e.stopPropagation()}
                        >
                          LinkedIn
                        </a>
                      )}
                      {member.github && (
                        <a
                          href={member.github}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-gray-700 hover:text-gray-900'
                          onClick={(e) => e.stopPropagation()}
                        >
                          GitHub
                        </a>
                      )}
                      {member.twitter && (
                        <a
                          href={member.twitter}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-blue-400 hover:text-blue-600'
                          onClick={(e) => e.stopPropagation()}
                        >
                          Twitter
                        </a>
                      )}
                      {member.dribbble && (
                        <a
                          href={member.dribbble}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-pink-500 hover:text-pink-700'
                          onClick={(e) => e.stopPropagation()}
                        >
                          Dribbble
                        </a>
                      )}
                      {member.personal && (
                        <a
                          href={member.personal}
                          target='_blank'
                          rel='noopener noreferrer'
                          className='text-green-600 hover:text-green-800'
                          onClick={(e) => e.stopPropagation()}
                        >
                          Blog
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
