export default function DashboardOverview() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Dashboard Overview
      </h1>
      <p className="text-gray-600 mb-8">
        Welcome back! Here is a summary of the school&apos;s performance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
            Total Students
          </p>
          <p className="text-4xl font-extrabold text-gray-900">842</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
            Results Published
          </p>
          <p className="text-4xl font-extrabold text-blue-600">1,204</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">
            Pending Entries
          </p>
          <p className="text-4xl font-extrabold text-orange-500">12</p>
        </div>
      </div>
    </div>
  );
}
