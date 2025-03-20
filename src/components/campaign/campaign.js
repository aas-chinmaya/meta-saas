'use client'
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { AlertCircle, CheckCircle, Plus, XCircle } from 'lucide-react';

const Campaign = () => {
  const [promotions, setPromotions] = useState([
    {
      id: 1,
      title: 'Summer Sale',
      audience: 'All Users',
      status: 'Sent',
      scheduledFor: '2025-03-17T10:00',
      stats: {
        delivered: 85,
        read: 60,
        clicked: 25,
        failed: 5
      }
    },
    {
      id: 2,
      title: 'New Product Launch',
      audience: 'Premium Users',
      status: 'Scheduled',
      scheduledFor: '2025-03-18T15:30',
      stats: null
    },
    {
      id: 3,
      title: 'Flash Discount',
      audience: 'Active Users',
      status: 'Failed',
      scheduledFor: '2025-03-16T12:00',
      stats: {
        delivered: 0,
        read: 0,
        clicked: 0,
        failed: 100
      }
    }
  ]);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    audience: 'all',
    dateRange: 'all'
  });
  const [sortBy, setSortBy] = useState('title'); // Default sorting by title

  // Function to filter based on status, audience, and date range
  const filterPromotions = (promotions) => {
    return promotions
      .filter((promotion) => {
        // Filter by status
        if (filters.status !== 'all' && promotion.status.toLowerCase() !== filters.status) {
          return false;
        }

        // Filter by audience
        if (filters.audience !== 'all' && promotion.audience.toLowerCase() !== filters.audience) {
          return false;
        }

        // Filter by date range
        if (filters.dateRange !== 'all') {
          const promotionDate = new Date(promotion.scheduledFor);
          const today = new Date();
          if (filters.dateRange === 'today' && promotionDate.toDateString() !== today.toDateString()) {
            return false;
          } else if (filters.dateRange === 'week' && !isWithinWeek(promotionDate, today)) {
            return false;
          } else if (filters.dateRange === 'month' && promotionDate.getMonth() !== today.getMonth()) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'title') {
          return a.title.localeCompare(b.title); // Sort by title
        } else if (sortBy === 'scheduledFor') {
          return new Date(a.scheduledFor) - new Date(b.scheduledFor); // Sort by scheduled date
        }
        return 0;
      });
  };

  // Helper function to check if a date is within the current week
  const isWithinWeek = (date, currentDate) => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay()); // Start of the week (Sunday)
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6); // End of the week (Saturday)

    return date >= startOfWeek && date <= endOfWeek;
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Sent':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Scheduled':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'Failed':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const handleCreatePromotion = (newPromotion) => {
    setPromotions([...promotions, { ...newPromotion, id: promotions.length + 1 }]);
    setShowCreateModal(false);
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Promotions</h1>
          <button
            onClick={() => setShowCreateModal(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <Plus size={20} className="mr-2" />
            Create Promotion
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex items-center space-x-4">
            <select
              value={filters.status}
              onChange={(e) => setFilters({ ...filters, status: e.target.value })}
              className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            >
              <option value="all">All Status</option>
              <option value="sent">Sent</option>
              <option value="scheduled">Scheduled</option>
              <option value="failed">Failed</option>
            </select>

            <select
              value={filters.audience}
              onChange={(e) => setFilters({ ...filters, audience: e.target.value })}
              className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            >
              <option value="all">All Audiences</option>
              <option value="all-users">All Users</option>
              <option value="premium">Premium Users</option>
              <option value="active">Active Users</option>
            </select>

            <select
              value={filters.dateRange}
              onChange={(e) => setFilters({ ...filters, dateRange: e.target.value })}
              className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            >
              <option value="all">All Time</option>
              <option value="today">Today</option>
              <option value="week">This Week</option>
              <option value="month">This Month</option>
            </select>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800"
            >
              <option value="title">Sort by Title</option>
              <option value="scheduledFor">Sort by Date</option>
            </select>
          </div>
        </div>

        {/* Promotions List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Promotion
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Audience
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Scheduled For
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Performance
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {filterPromotions(promotions).map((promotion) => (
                <tr key={promotion.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {promotion.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {promotion.audience}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(promotion.status)}`}>
                      {promotion.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(promotion.scheduledFor).toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {promotion.stats ? (
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <CheckCircle size={16} className="text-green-500 mr-1" />
                          <span className="text-sm">{promotion.stats.delivered}%</span>
                        </div>
                        <div className="flex items-center">
                          <AlertCircle size={16} className="text-yellow-500 mr-1" />
                          <span className="text-sm">{promotion.stats.read}%</span>
                        </div>
                        <div className="flex items-center">
                          <XCircle size={16} className="text-red-500 mr-1" />
                          <span className="text-sm">{promotion.stats.failed}%</span>
                        </div>
                      </div>
                    ) : (
                      <div className="text-sm text-gray-500 dark:text-gray-400">No Data</div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Campaign;
