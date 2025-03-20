'use client'
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Search,
  Sun,
  Moon,
  Bell,
  User,
  LogOut
} from 'lucide-react';
import { logout } from '@/redux/slices/authSlice';

export default function TopNavbar() {
 
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const notifications = useSelector(state => state.notifications.items);
  const unreadCount = notifications?.filter(n => !n.read).length || 0;

 

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="h-16 bg-white dark:bg-gray-900 border-b dark:border-gray-700 px-4 flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex-1 max-w-xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border dark:border-gray-700 dark:bg-gray-800 focus:outline-none focus:border-blue-500"
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
    

        {/* Notifications */}
        <div className="relative">
          <button className="cursor-pointer p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <Bell size={20} />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>
        </div>

        {/* User Menu */}
        <div className="relative group">
          <button className="cursor-pointer flex items-center space-x-2 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <User size={20} />
            <span className="hidden md:block">{user?.name || 'User'}</span>
          </button>

          {/* Dropdown Menu */}
          <div className="absolute right-0 top-full mt-1 w-48 bg-white dark:bg-gray-900 rounded-lg shadow-lg border dark:border-gray-700 hidden group-hover:block">
            <div className="p-2">
              <button
                onClick={handleLogout}
                className="cursor-pointer w-full flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-red-500"
              >
                <LogOut size={18} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
