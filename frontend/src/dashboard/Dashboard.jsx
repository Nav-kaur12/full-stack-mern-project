import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js';
import PieChart1 from './PieChart1';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const Dashboard = () => {
  // Example data for statistics and charts
  const bookStats = {
    totalSales: 5400,
    totalBooks: 120,
    averagePrice: 40,
    totalOrders: 250,
  };

  return (
    <>
    <div className="w-full lg:w-[1000px] mx-auto">
      <div className="bg-gray-100 min-h-screen">
        <header className="bg-gray-700 text-white p-4 text-center shadow-md">
          <h1 className="text-2xl font-semibold">Dashboard</h1>
        </header>

        <main className="p-6">
          {/* Statistics Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Total Books</h3>
              <p className="text-2xl font-bold text-gray-900">{bookStats.totalBooks}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Total Sales</h3>
              <p className="text-2xl font-bold text-gray-900">Rs {bookStats.totalSales}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Average Price</h3>
              <p className="text-2xl font-bold text-gray-900">Rs {bookStats.averagePrice}</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-700">Total Orders</h3>
              <p className="text-2xl font-bold text-gray-900">{bookStats.totalOrders}</p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Sales Overview</h2>
            <PieChart1 />
          </div>
        </main>
      </div>
    </div>
    </>
  );
};

export default Dashboard;
