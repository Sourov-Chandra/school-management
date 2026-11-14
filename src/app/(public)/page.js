"use client";

import { useState } from "react";
import ResultSearchForm from "@/components/results/ResultSearchForm";
import MarksheetCard from "@/components/results/MarksheetCard";

export default function Home() {
  const [hasSearched, setHasSearched] = useState(false);
  const [searchParams, setSearchParams] = useState(null);

  const handleSearch = (data) => {
    setSearchParams(data);
    setHasSearched(true);
  };

  return (
    <div className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-slate-50 flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob"></div>
      <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-[128px] opacity-40 animate-blob animation-delay-4000"></div>

      <div className="relative z-10 w-full">
        {/* Hero Section */}
        {!hasSearched && (
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-2 bg-blue-50/80 backdrop-blur-sm border border-blue-100 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
              </span>
              <span>Result Publishing System Live</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
              Check Your Results <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">
                Instantly & Securely.
              </span>
            </h1>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Access your academic marksheets, performance analytics, and
              official grades through the EduPulse digital portal.
            </p>
          </div>
        )}

        {/* Search Form */}
        {!hasSearched && <ResultSearchForm onSearch={handleSearch} />}

        {/* The Marksheet Component */}
        {hasSearched && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            <button
              onClick={() => setHasSearched(false)}
              className="mb-4 text-blue-600 font-semibold hover:text-blue-800 transition-colors mx-auto block max-w-5xl text-left w-full"
            >
              ← Search Another Result
            </button>
            <MarksheetCard studentInfo={searchParams} />
          </div>
        )}
      </div>
    </div>
  );
}
