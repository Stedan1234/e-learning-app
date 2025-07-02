import React from 'react';
import { ContactForm } from '@/app/pages/components/contactForm';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const Page = () => {
return (
  <main className='flex-grow py-5 px-4 sm:px-6 lg:px-20 bg-[var(--background)]'>
    <div className='px-[var(--page-padding-sm)] lg:px-[var(--page-padding-lg)] pt-20'>
      <div className='container mx-auto pb-10'>
        <h1 className='text-4xl md:text-5xl font-bold mb-6 text-[var(--text-color)]'>
          Contact Us
        </h1>
        <p className='text-xl opacity-90 text-[var(--text-color)]'>
          Have a question about our e-learning platform or need support?
          We&apos;re here to assist you!
        </p>
        <Link
          href='https://wa.me/message/6FKOR265YTVXH1'
          target='_blank'
          className='badge text-white bg-[var(--color)] hover:bg-green-400 hover:text-white border-none py-4 px-8 flex items-center gap-2 my-4 group transition duration-300 cursor-pointer'
        >
          <FaWhatsapp className='text-green-400 transition duration-300 group-hover:text-white' />
          Let&apos;s start a conversation
        </Link>
      </div>
      <ContactForm />
    </div>
  </main>
);
};

export default Page;
