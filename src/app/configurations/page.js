'use client'
import { useState } from 'react';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { 
  Key,
  Phone,
  Link as LinkIcon,
  Copy,
  Eye,
  EyeOff,
  CheckCircle,
  XCircle
} from 'lucide-react';

const CredentialsPage = () => {
  const [credentials, setCredentials] = useState({
    apiKey: process.env.NEXT_PUBLIC_WHATSAPP_API_KEY || '',
    phoneNumberId: process.env.NEXT_PUBLIC_WHATSAPP_PHONE_ID || '',
    webhookUrl: process.env.NEXT_PUBLIC_WEBHOOK_URL || ''
  });

  const [showApiKey, setShowApiKey] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [testStatus, setTestStatus] = useState(null);
  const [copiedField, setCopiedField] = useState(null);

  const handleSave = async () => {
    // In a real app, this would make an API call to update credentials
    setIsEditing(false);
    // Show success message
    alert('Credentials updated successfully');
  };

  const handleTestConnection = async () => {
    // Simulate API connection test
    setTestStatus('testing');
    setTimeout(() => {
      setTestStatus(Math.random() > 0.5 ? 'success' : 'error');
    }, 2000);
  };

  const handleCopy = (field, value) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const maskValue = (value) => {
    if (!value) return '';
    return '*'.repeat(value.length - 4) + value.slice(-4);
  };

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-semibold">WhatsApp API Credentials</h1>
          <div className="space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 text-gray-600 dark:text-gray-400"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Edit Credentials
              </button>
            )}
          </div>
        </div>

        {/* Credentials Form */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
          <div className="p-6 space-y-6">
            {/* API Key */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <Key size={18} className="mr-2" />
                API Key
              </label>
              <div className="mt-1 relative rounded-lg shadow-sm overflow-hidden">
                {isEditing ? (
                  <input
                    type={showApiKey ? 'text' : 'password'}
                    value={credentials.apiKey}
                    onChange={(e) => setCredentials({ ...credentials, apiKey: e.target.value })}
                    className="block w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-900"
                    placeholder="Enter your WhatsApp API Key"
                  />
                ) : (
                  <div className="flex items-center justify-between px-3 py-2 border rounded-lg dark:border-gray-700">
                    <span className="text-gray-900 dark:text-gray-100">
                      {showApiKey ? credentials.apiKey : maskValue(credentials.apiKey)}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setShowApiKey(!showApiKey)}
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        {showApiKey ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                      <button
                        onClick={() => handleCopy('apiKey', credentials.apiKey)}
                        className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                      >
                        {copiedField === 'apiKey' ? <CheckCircle size={18} className="text-green-500" /> : <Copy size={18} />}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Phone Number ID */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <Phone size={18} className="mr-2" />
                Phone Number ID
              </label>
              <div className="mt-1 relative rounded-lg shadow-sm">
                {isEditing ? (
                  <input
                    type="text"
                    value={credentials.phoneNumberId}
                    onChange={(e) => setCredentials({ ...credentials, phoneNumberId: e.target.value })}
                    className="block w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-900"
                    placeholder="Enter your WhatsApp Phone Number ID"
                  />
                ) : (
                  <div className="flex items-center justify-between px-3 py-2 border rounded-lg dark:border-gray-700">
                    <span className="text-gray-900 dark:text-gray-100">{credentials.phoneNumberId}</span>
                    <button
                      onClick={() => handleCopy('phoneId', credentials.phoneNumberId)}
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      {copiedField === 'phoneId' ? <CheckCircle size={18} className="text-green-500" /> : <Copy size={18} />}
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Webhook URL */}
            <div>
              <label className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                <LinkIcon size={18} className="mr-2" />
                Webhook URL
              </label>
              <div className="mt-1 relative rounded-lg shadow-sm">
                {isEditing ? (
                  <input
                    type="url"
                    value={credentials.webhookUrl}
                    onChange={(e) => setCredentials({ ...credentials, webhookUrl: e.target.value })}
                    className="block w-full px-3 py-2 border rounded-lg dark:border-gray-700 dark:bg-gray-900"
                    placeholder="Enter your Webhook URL"
                  />
                ) : (
                  <div className="flex items-center justify-between px-3 py-2 border rounded-lg dark:border-gray-700">
                    <span className="text-gray-900 dark:text-gray-100">{credentials.webhookUrl}</span>
                    <button
                      onClick={() => handleCopy('webhook', credentials.webhookUrl)}
                      className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                    >
                      {copiedField === 'webhook' ? <CheckCircle size={18} className="text-green-500" /> : <Copy size={18} />}
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Test Connection */}
          <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900 rounded-b-lg border-t dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-700 dark:text-gray-300">Test API Connection</span>
                {testStatus && (
                  <span className={`flex items-center text-sm ${
                    testStatus === 'success' ? 'text-green-500' : 
                    testStatus === 'error' ? 'text-red-500' : 'text-gray-500'
                  }`}>
                    {testStatus === 'success' && <CheckCircle size={16} className="mr-1" />}
                    {testStatus === 'error' && <XCircle size={16} className="mr-1" />}
                    {testStatus === 'testing' ? 'Testing...' :
                     testStatus === 'success' ? 'Connection successful' :
                     'Connection failed'}
                  </span>
                )}
              </div>
              <button
                onClick={handleTestConnection}
                disabled={testStatus === 'testing'}
                className={`px-4 py-2 rounded-lg ${
                  testStatus === 'testing'
                    ? 'bg-gray-300 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                Test Connection
              </button>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-900 rounded-lg p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                Security Notice
              </h3>
              <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                <p>
                  Keep your API credentials secure and never share them publicly. We recommend:
                </p>
                <ul className="list-disc list-inside mt-2">
                  <li>Using environment variables for sensitive data</li>
                  <li>Regularly rotating your API keys</li>
                  <li>Monitoring API usage for suspicious activity</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default CredentialsPage;




