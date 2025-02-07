import Image from 'next/image';
import Link from 'next/link';
import ProximaTable from '@/component/table';
import aiIllustration from './1.png'; // Renaming to a valid variable name

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-br from-blue-50 to-blue-300 text-center p-6">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 py-4 bg-white shadow-lg rounded-lg max-w-5xl mx-auto mt-4">
        <div className="text-3xl font-extrabold text-blue-700 flex items-center gap-2">
          🚀 proxima
        </div>
        <div className="text-sm text-blue-700 font-semibold cursor-pointer hover:underline transition-colors duration-300">
          API Platform
        </div>
      </nav>
      
      {/* Hero Section */}
      <h1 className="text-7xl font-extrabold text-blue-700 mt-12 drop-shadow-lg tracking-tight">proxima</h1>
      <h2 className="text-2xl text-gray-800 mt-3 italic font-medium">Exploring the Future of AI</h2>
      
      {/* CTA Buttons */}
      <div className="mt-12 flex gap-8">
        <Link href="http://localhost:3001">
          <div className="p-6 bg-white shadow-xl rounded-2xl text-center w-72 cursor-pointer hover:scale-105 transition-transform duration-300 border border-blue-300">
            <h3 className="text-blue-700 font-semibold text-xl">Start Now</h3>
            <p className="text-gray-600 mt-2">Affordable access to cutting-edge AI models. Experience intelligence like never before.</p>
          </div>
        </Link>

        <Link href="/download">
          <div className="p-6 bg-white shadow-xl rounded-2xl text-center w-72 cursor-pointer hover:scale-105 transition-transform duration-300 border border-blue-300">
            <h3 className="text-blue-700 font-semibold text-xl">Get Proxima App</h3>
            <p className="text-gray-600 mt-2">Chat on the go with Proxima—your Affordable, all-in-one AI tool.</p>
          </div>
        </Link>
      </div>
      
      {/* AI Illustration */}
      <div className="mt-16">
        <Image 
          src={aiIllustration} 
          alt="AI Illustration" 
          width={1200} 
          height={1000} 
          className="rounded-lg shadow-md"
        />
      </div>
      
      {/* Data Table */}
      <div className="mt-16 w-full max-w-5xl bg-white p-6 shadow-lg rounded-xl border border-gray-200">
        <ProximaTable />
      </div>
    </div>
  );
}
