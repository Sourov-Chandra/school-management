"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileSpreadsheet,
  TableProperties,
  CheckCircle,
  Users,
  BookOpen,
  CalendarDays,
  Menu,
  X,
  LogOut,
  GraduationCap,
  Bell,
} from "lucide-react";

export default function PanelShell({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    {
      name: "Marks Entry",
      href: "/dashboard/marks-entry",
      icon: FileSpreadsheet,
    },
    {
      name: "Tabulation",
      href: "/dashboard/tabulation",
      icon: TableProperties,
    },
    { name: "Publish Results", href: "/dashboard/publish", icon: CheckCircle },
    { name: "Students", href: "/dashboard/students", icon: Users },
    { name: "Subjects", href: "/dashboard/subjects", icon: BookOpen },
    { name: "Exams", href: "/dashboard/exams", icon: CalendarDays },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:shrink-0 flex flex-col ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header / Logo */}
        <div className="h-20 flex items-center px-8 border-b border-gray-100">
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gray-900 shadow-md">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-extrabold text-gray-900 tracking-tight">
              EduPulse
            </span>
          </Link>
        </div>

        {/* Sidebar Navigation */}
        <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto">
          {menuItems.map((item) => {
            const isActive =
              pathname === item.href || pathname?.startsWith(`${item.href}/`);
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3.5 rounded-xl font-medium transition-all duration-200 group ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                    : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-600"}`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-4 border-t border-gray-100">
          <button className="flex items-center space-x-3 px-4 py-3 w-full rounded-xl font-medium text-red-600 hover:bg-red-50 transition-colors">
            <LogOut className="w-5 h-5" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
        {/* Top Header */}
        <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-8 z-30">
          <div className="flex items-center">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-gray-900 mr-4"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h2 className="hidden sm:block text-xl font-bold text-gray-800">
              Admin Portal
            </h2>
          </div>

          {/* Header Right Side */}
          <div className="flex items-center space-x-5">
            <button className="relative p-2 text-gray-400 hover:text-gray-600 transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-px bg-gray-200"></div>
            <div className="flex items-center space-x-3 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-linear-to-tr from-blue-100 to-indigo-100 border border-blue-200 flex items-center justify-center">
                <span className="text-blue-700 font-bold text-sm">SC</span>
              </div>
              <div className="hidden md:block text-sm">
                <p className="font-bold text-gray-900">Sourov Chandra</p>
                <p className="text-gray-500 font-medium">Head Teacher</p>
              </div>
            </div>
          </div>
        </header>

        {/* Page Content Rendering Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="max-w-7xl mx-auto">{children}</div>
        </main>
      </div>
    </div>
  );
}
