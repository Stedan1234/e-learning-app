import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from '@vercel/analytics/next';
import Navbar from "@/app/pages/components/navbar";
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from "@/app/pages/components/footer";
import ScrollToTop from "@/app/pages/components/scrollToTop"; // Updated import

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata = {
  title: "Uni E-Learning App",
  description: "This is a school project by Group 30 for Fundamentals in Software Eng. Course",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
          <ScrollToTop />
        </ClerkProvider>
      </body>
    </html>
  );
}
