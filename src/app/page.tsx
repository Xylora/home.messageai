import Image from 'next/image';
import Link from 'next/link';
import ProximaTable from '@/component/table';
import aiIllustration from './1.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-300 text-center p-4 sm:p-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-white shadow-lg rounded-lg max-w-5xl mx-auto mt-4">
        <div className="text-2xl sm:text-3xl font-extrabold text-blue-700 flex items-center gap-2">
          🚀 AllModelHub
        </div>
      </nav>

      {/* Hero Section */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-blue-700 mt-8 sm:mt-12 drop-shadow-lg tracking-tight">
        AllModelHub
      </h1>
      <h2 className="text-lg sm:text-2xl text-gray-800 mt-2 sm:mt-3 italic font-medium">
        Exploring the Future of AI
      </h2>

      {/* CTA Buttons */}
      <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-6 sm:gap-8">
        <Link href="https://chat.allmodelhub.me/">
          <div className="p-5 sm:p-6 bg-white shadow-xl rounded-2xl text-center w-64 sm:w-72 cursor-pointer hover:scale-105 transition-transform duration-300 border border-blue-300">
            <h3 className="text-blue-700 font-semibold text-lg sm:text-xl">Start Now</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Affordable access to cutting-edge AI models. Experience intelligence like never before.
            </p>
          </div>
        </Link>

        <Link href="https://chat.allmodelhub.me/">
          <div className="p-5 sm:p-6 bg-white shadow-xl rounded-2xl text-center w-64 sm:w-72 cursor-pointer hover:scale-105 transition-transform duration-300 border border-blue-300">
            <h3 className="text-blue-700 font-semibold text-lg sm:text-xl">Get AllModelHub App</h3>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              Chat on the go with AllModelHub—your affordable, all-in-one AI tool.
            </p>
          </div>
        </Link>
      </div>

      {/* AI Illustration */}
      <div className="mt-12 sm:mt-16 w-full max-w-[90%] sm:max-w-4xl">
        <Image 
          src={aiIllustration} 
          alt="AI Illustration" 
          width={1200} 
          height={1000} 
          className="rounded-lg shadow-md w-full h-auto"
        />
      </div>

      {/* Data Table */}
      <div className="mt-12 sm:mt-16 w-full max-w-[95%] sm:max-w-5xl bg-white p-4 sm:p-6 shadow-lg rounded-xl border border-gray-200">
        <ProximaTable />
      </div>
    </div>
  );
}
