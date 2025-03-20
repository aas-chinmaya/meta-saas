'use client'
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  Moon,
  Sun,
  Globe,
  Bell,
  Lock,
  Key,
  Save,
  CheckCircle
} from 'lucide-react';

const SettingsPage = () => {
  const [settings, setSettings] = useState({
  
    language: 'en',
    notifications: {
      messages: true,
      users: true,
      errors: true,
      promotions: true
    },
    security: {
      twoFactor: false,
      sessionTimeout: 30,
      ipWhitelist: ''
    },
    api: {
      webhookUrl: '',
      retryAttempts: 3,
      timeout: 5000
    }
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: typeof prev[section] === 'object'
        ? { ...prev[section], [field]: value }
        : value
    }));
    setSaved(false);
  };

  const handleSave = async () => {
    // Simulate API call to save settings
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const handleTestWebhook = async () => {
    // Simulate webhook test
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Webhook test successful!');
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">Settings</h1>
          <button
            onClick={handleSave}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {saved ? (
              <>
                <CheckCircle size={20} className="mr-2" />
                Saved
              </>
            ) : (
              <>
                <Save size={20} className="mr-2" />
                Save Changes
              </>
            )}
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
       

          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">Notifications</h2>
            <div className="space-y-4">
              {Object.entries(settings.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300">
                    <Bell size={18} className="mr-2" />
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </label>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={value}
                      onChange={(e) => handleChange('notifications', key, e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">Security</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Lock size={18} className="mr-2" />
                  Two-Factor Authentication
                </label>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={settings.security.twoFactor}
                    onChange={(e) => handleChange('security', 'twoFactor', e.target.checked)}
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                </label>
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  <Key size={18} className="mr-2" />
                  Session Timeout (minutes)
                </label>
                <input
                  type="number"
                  value={settings.security.sessionTimeout}
                  onChange={(e) => handleChange('security', 'sessionTimeout', parseInt(e.target.value))}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>

              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  IP Whitelist
                </label>
                <textarea
                  value={settings.security.ipWhitelist}
                  onChange={(e) => handleChange('security', 'ipWhitelist', e.target.value)}
                  placeholder="Enter IP addresses (one per line)"
                  rows={3}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>
          </div>

          {/* API Settings */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-medium mb-4">API Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Webhook URL
                </label>
                <div className="flex space-x-2">
                  <input
                    type="url"
                    value={settings.api.webhookUrl}
                    onChange={(e) => handleChange('api', 'webhookUrl', e.target.value)}
                    placeholder="https://your-webhook-url.com"
                    className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                  <button
                    onClick={handleTestWebhook}
                    className="px-4 py-2 bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-200 dark:hover:bg-gray-600"
                  >
                    Test
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Retry Attempts
                  </label>
                  <input
                    type="number"
                    value={settings.api.retryAttempts}
                    onChange={(e) => handleChange('api', 'retryAttempts', parseInt(e.target.value))}
                    min="1"
                    max="10"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Timeout (ms)
                  </label>
                  <input
                    type="number"
                    value={settings.api.timeout}
                    onChange={(e) => handleChange('api', 'timeout', parseInt(e.target.value))}
                    step="1000"
                    min="1000"
                    className="block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 dark:bg-gray-900 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default SettingsPage;
