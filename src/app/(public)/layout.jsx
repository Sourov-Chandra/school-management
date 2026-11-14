import PublicNavbar from "@/components/nav/PublicNavbar";

export default function PublicLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <PublicNavbar />

      {/* Main Content Area */}
      <main className="grow">{children}</main>

      {/* Simple Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>
            © {new Date().getFullYear()} EduPulse Result Management System. All
            rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
