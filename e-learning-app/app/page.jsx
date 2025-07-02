import UpdateBanner from '@/app/pages/components/updateBanner';
import HomeHero from '@/app/pages/components/homeHero';
import CourseInProgress from '@/app/pages/components/CourseInProgress';
import TrendingCourses from '@/app/pages/components/TrendingCourses';
import { SignedIn, SignedOut } from '@clerk/nextjs';

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen'>
      <HomeHero />
      <div className='py-5 px-4 sm:px-6 lg:px-20 bg-[var(--background)]'>
      <SignedIn>
      <CourseInProgress />
      </SignedIn>
      <TrendingCourses />
        <UpdateBanner />
      </div>
    </main>
  );
}
