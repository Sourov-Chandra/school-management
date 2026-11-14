"use client";

import { useState } from "react";
import { Search, GraduationCap, Users, Hash, Sparkles } from "lucide-react";

export default function ResultSearchForm({ onSearch }) {
  const [formData, setFormData] = useState({
    studentClass: "",
    group: "",
    roll: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(formData);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Decorative background glow behind the form */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-[2.5rem] blur-xl opacity-20 animate-pulse"></div>

      {/* Main Form Card (Glassmorphism) */}
      <div className="relative bg-white/80 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-2xl shadow-blue-900/5 border border-white">
        <div className="flex items-center justify-center space-x-3 mb-10">
          <div className="p-3 bg-blue-50 text-blue-600 rounded-2xl">
            <Search className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            Find Your Marksheet
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Class Selection */}
            <div className="relative group">
              <label className="text-sm font-bold text-gray-700 mb-2 block uppercase tracking-wider text-xs">
                Class
              </label>
              <div className="relative flex items-center">
                <GraduationCap className="absolute left-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <select
                  required
                  className="w-full bg-gray-50/50 border border-gray-200 text-gray-800 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all appearance-none font-medium"
                  value={formData.studentClass}
                  onChange={(e) =>
                    setFormData({ ...formData, studentClass: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Select Class...
                  </option>
                  <option value="6">Class 6</option>
                  <option value="7">Class 7</option>
                  <option value="8">Class 8</option>
                  <option value="9">Class 9</option>
                  <option value="10">Class 10</option>
                </select>
              </div>
            </div>

            {/* Group Selection */}
            <div className="relative group">
              <label className="text-sm font-bold text-gray-700 mb-2 block uppercase tracking-wider text-xs">
                Group / Section
              </label>
              <div className="relative flex items-center">
                <Users className="absolute left-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <select
                  required
                  className="w-full bg-gray-50/50 border border-gray-200 text-gray-800 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all appearance-none font-medium"
                  value={formData.group}
                  onChange={(e) =>
                    setFormData({ ...formData, group: e.target.value })
                  }
                >
                  <option value="" disabled>
                    Select Group...
                  </option>
                  <option value="General">General (6-8)</option>
                  <option value="Science">Science (9-10)</option>
                  <option value="Humanities">Humanities (9-10)</option>
                  <option value="Business">Business (9-10)</option>
                </select>
              </div>
            </div>

            {/* Roll Number Input */}
            <div className="relative group">
              <label className="text-sm font-bold text-gray-700 mb-2 block uppercase tracking-wider text-xs">
                Roll No.
              </label>
              <div className="relative flex items-center">
                <Hash className="absolute left-4 w-5 h-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
                <input
                  type="number"
                  required
                  placeholder="e.g. 01"
                  className="w-full bg-gray-50/50 border border-gray-200 text-gray-800 rounded-xl pl-12 pr-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:bg-white transition-all font-medium placeholder:text-gray-400"
                  value={formData.roll}
                  onChange={(e) =>
                    setFormData({ ...formData, roll: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gray-900 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-gray-800 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-0.5"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
            <div className="relative flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-blue-200 group-hover:text-white transition-colors" />
              <span>Generate Academic Report</span>
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
