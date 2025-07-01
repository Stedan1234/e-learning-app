'use client';
import React, { useState, useEffect } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import {
  FaTelegramPlane,
  FaEnvelope,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function ContactForm() {
  const [state, handleSubmit] = useForm('movwykyp');
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setIsSuccess(true);
      const timer = setTimeout(() => {
        window.location.reload();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const socials = [
    { id: 1, icon: <FaGithub />, link: 'https://www.github.com/Stedan1234' },
    {
      id: 2,
      icon: <FaLinkedin />,
      link: 'https://www.linkedin.com/in/stedan-ampofo-235820230',
    },
    {
      id: 3,
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/stedan.webdev/#',
    },
  ];

  return isSuccess ? (
    <p className='text-green-500 font-bold'>
      Message sent successfully! Refreshing...
    </p>
  ) : (
    <section className='grid grid-cols-1 lg:grid-cols-2 min-h-screen gap-10'>
      <div className='flex flex-col gap-6'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-2xl font-medium text-[var(--text-color)]'>
            Contact Information
          </h2>
          <p className='text-[var(--text-color)]'>
            Feel free to reach out to us through any of the following channels.
            We&apos;re here to help you.
          </p>

          <div className='flex flex-col gap-10'>
            <p className='flex items-center gap-2 text-[var(--text-color)]'>
              <FaEnvelope />
              <Link
                href='mailto:group30boys@gmail.com'
                className='hover:text-[var(--span-color)]'
              >
                group30boys@gmail.com
              </Link>
            </p>
            <p className='flex items-center gap-2 text-[var(--text-color)]'>
              <FaPhone />
              <Link
                href='tel:+233592753329'
                className='hover:text-[var(--span-color)]'
              >
                +233 xx xx xx xx
              </Link>
            </p>
            <p className='flex items-center gap-2 text-[var(--text-color)]'>
              <FaLocationDot />
              <span>GCTU Main Campus, Accra - Tesano</span>
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-4'>
          <h2 className='text-xl font-medium text-[var(--text-color)]'>
            Connect with us
          </h2>
          <div className='flex space-x-4 pb-4'>
            {socials.map((social) => (
              <a
                key={social.id}
                href={social.link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-[var(--text-color)] hover:text-[var(--span-color)] text-xl transition-all duration-300'
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <motion.form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <h2 className='text-2xl font-medium'>Send Me a Message</h2>

        <label htmlFor='name' className='font-medium'>
          Name
        </label>
        <input
          type='text'
          name='name'
          id='name'
          required
          className='w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--span-color)] focus:border-transparent'
        />
        <ValidationError prefix='Name' field='name' errors={state.errors} />

        <label htmlFor='email' className='font-medium'>
          Email
        </label>
        <input
          type='email'
          name='email'
          id='email'
          required
          className='w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--span-color)] focus:border-transparent'
        />
        <ValidationError prefix='Email' field='email' errors={state.errors} />

        <label htmlFor='message' className='font-medium'>
          Message
        </label>
        <textarea
          name='message'
          id='message'
          required
          className='w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[var(--span-color)] focus:border-transparent'
        ></textarea>
        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />

        <button
          type='submit'
          disabled={state.submitting}
          className='flex items-center justify-center gap-1 px-4 py-2 bg-[var(--color)] text-[var(--background)] rounded-md hover:bg-[var(--color-hover)] transition-all duration-300 cursor-pointer'
        >
          Send Message <FaTelegramPlane />
        </button>
      </motion.form>
    </section>
  );
}
