"use client";

import { Printer, Download, Award } from "lucide-react";

export default function MarksheetCard({ studentInfo }) {
  // Dummy data for frontend preview
  const results = [
    {
      subject: "Bangla",
      cq: 55,
      mcq: 25,
      practical: 0,
      total: 80,
      grade: "A+",
      gpa: "5.00",
    },
    {
      subject: "English",
      cq: 60,
      mcq: 20,
      practical: 0,
      total: 80,
      grade: "A+",
      gpa: "5.00",
    },
    {
      subject: "Mathematics",
      cq: 45,
      mcq: 22,
      practical: 0,
      total: 67,
      grade: "A-",
      gpa: "3.50",
    },
    {
      subject: "Science",
      cq: 40,
      mcq: 20,
      practical: 23,
      total: 83,
      grade: "A+",
      gpa: "5.00",
    },
    {
      subject: "BGS",
      cq: 50,
      mcq: 24,
      practical: 0,
      total: 74,
      grade: "A",
      gpa: "4.00",
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 bg-white rounded-3xl shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
      {/* Header Section */}
      <div className="bg-linear-to-r from-blue-700 to-indigo-800 p-8 text-white flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
        <div>
          <h3 className="text-2xl font-bold mb-1">Thakurgaon High School</h3>
          <p className="text-blue-100 font-medium">
            Half-Yearly Examination - 2026
          </p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm transition-colors font-medium">
            <Printer className="w-4 h-4" />
            <span>Print</span>
          </button>
          <button className="flex items-center space-x-2 bg-white text-blue-700 hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors font-bold shadow-sm">
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* Student Details */}
      <div className="p-8 border-b border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
              Student Name
            </p>
            <p className="text-lg font-bold text-gray-900">Sourov Chandra</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
              Class / Group
            </p>
            <p className="text-lg font-bold text-gray-900">
              Class {studentInfo?.studentClass || "10"} •{" "}
              {studentInfo?.group || "Science"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
              Roll Number
            </p>
            <p className="text-lg font-bold text-gray-900">
              {studentInfo?.roll || "01"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-1">
              Total GPA
            </p>
            <div className="flex items-center space-x-2 text-green-600">
              <Award className="w-5 h-5" />
              <span className="text-lg font-bold">4.50 (Passed)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marks Table */}
      <div className="p-8 overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50 text-gray-600 text-sm font-bold uppercase tracking-wider">
              <th className="p-4 rounded-tl-xl">Subject</th>
              <th className="p-4">CQ</th>
              <th className="p-4">MCQ</th>
              <th className="p-4">Practical</th>
              <th className="p-4">Total</th>
              <th className="p-4">Grade</th>
              <th className="p-4 rounded-tr-xl">GPA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {results.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4 font-bold text-gray-800">{item.subject}</td>
                <td className="p-4 text-gray-600 font-medium">{item.cq}</td>
                <td className="p-4 text-gray-600 font-medium">{item.mcq}</td>
                <td className="p-4 text-gray-600 font-medium">
                  {item.practical || "-"}
                </td>
                <td className="p-4 font-bold text-gray-900">{item.total}</td>
                <td className="p-4">
                  <span
                    className={`inline-flex px-2.5 py-1 rounded-lg text-xs font-bold ${
                      item.grade === "A+"
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {item.grade}
                  </span>
                </td>
                <td className="p-4 font-bold text-gray-800">{item.gpa}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
