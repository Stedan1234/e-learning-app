import React from 'react';
import logoImg from '@/public/logoImg.png';
import Image from 'next/image';
import Link from 'next/link';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
return (
  <footer className='bg-base-200 text-base-content px-10 py-12'>
    <div className='flex flex-col lg:flex-row justify-between gap-12'>
      {/* Company Info */}
      <div className='flex flex-col'>
        <Image
          src={logoImg}
          alt='Footer Logo'
          width={50}
          height={50}
          className='mb-4'
        />
        <p className='max-w-sm'>
          <strong>Group 30 Boys Ltd.</strong>
          <br />
          Ghana Communication Technology University, Accra-Tesano
          <br />
          Providing the best solutions since 2025
        </p>
      </div>

      {/* Links */}
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-8'>
                <div>
            <h6 className='footer-title mb-2'>Top Courses</h6>
          <a className='link link-hover'>course1</a>
          <br />
          <a className='link link-hover'>course2</a>
          <br />
          <a className='link link-hover'>course3</a>
          <br />
          <a className='link link-hover'>course4</a>
        </div>
        <div>
          <h6 className='footer-title mb-2'>Company</h6>
          <a className='link link-hover'>About us</a>
          <br />
          <a className='link link-hover'>Contact</a>
          <br />
          <a className='link link-hover'>Jobs</a>
          <br />
          <a className='link link-hover'>Press kit</a>
        </div>
        <div>
          <h6 className='footer-title mb-2'>Legal</h6>
          <a className='link link-hover'>Terms of use</a>
          <br />
          <a className='link link-hover'>Privacy policy</a>
          <br />
          <a className='link link-hover'>Cookie policy</a>
        </div>
      </div>
    </div>

    {/* Divider */}
    <div className='border-t border-gray-300 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center'>
      <p className='text-sm'>
        © {new Date().getFullYear()} Group 30 Boys Ltd. All rights reserved.
      </p>

      {/* Social Icons */}
      <div className='flex gap-4 mt-4 md:mt-0'>
        {/* Github */}
        <Link
          href='#'
          aria-label='Github'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillGithub/>
        </Link>

        {/* YouTube */}
        <Link
          href='#'
          aria-label='YouTube'
          target='_blank'
          rel='noopener noreferrer'
        >
         <AiFillYoutube/>
        </Link>

        {/* LinkedIn */}
        <Link
          href='#'
          aria-label='LinkedIn'
          target='_blank'
          rel='noopener noreferrer'
        >
          <AiFillLinkedin/>
        </Link>
      </div>
    </div>
  </footer>
);
};

export default Footer;
