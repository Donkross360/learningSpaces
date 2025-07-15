import React, { useState, useEffect } from 'react';
import { Users, Mail, Calendar, Download, Eye, EyeOff } from 'lucide-react';
import { supabase, WaitlistEntry } from '../lib/supabase';

const AdminDashboard = () => {
  const [waitlistEntries, setWaitlistEntries] = useState<WaitlistEntry[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Simple password protection (in production, use proper authentication)
  const ADMIN_PASSWORD = 'learningspaces2024';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      fetchWaitlistEntries();
    } else {
      setError('Invalid password');
    }
  };

  const fetchWaitlistEntries = async () => {
    try {
      const { data, error: supabaseError } = await supabase
        .from('waitlist')
        .select('*')
        .order('created_at', { ascending: false });

      if (supabaseError) {
        setError('Failed to fetch waitlist entries');
        return;
      }

      setWaitlistEntries(data || []);
    } catch (err) {
      setError('Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['Email', 'Name', 'Date Joined', 'Status'];
    const csvContent = [
      headers.join(','),
      ...waitlistEntries.map(entry => [
        entry.email,
        entry.name || '',
        new Date(entry.created_at).toLocaleDateString(),
        entry.status
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `waitlist-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-purple-950 flex items-center justify-center px-6">
        <div className="max-w-md w-full">
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-900 to-purple-800 rounded-full mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-inter text-2xl font-bold text-gray-900 mb-2">
                Admin Dashboard
              </h1>
              <p className="font-opensans text-gray-600">
                Enter password to access waitlist data
              </p>
            </div>

            <form onSubmit={handleLogin}>
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                  <p className="font-opensans text-red-600 text-sm">{error}</p>
                </div>
              )}

              <div className="mb-6">
                <label htmlFor="password" className="block font-inter font-semibold text-gray-900 mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-4 border border-gray-200 rounded-xl font-opensans focus:ring-2 focus:ring-purple-900 focus:border-transparent transition-all duration-200"
                    placeholder="Enter admin password"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-purple-900 to-purple-800 text-white font-inter font-semibold rounded-xl hover:from-purple-950 hover:to-purple-900 transition-all duration-200"
              >
                Access Dashboard
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-purple-900 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="font-opensans text-gray-600">Loading waitlist data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="font-inter text-3xl font-bold text-gray-900 mb-2">
                  Waitlist Dashboard
                </h1>
                <p className="font-opensans text-gray-600">
                  Manage your LearningSpaces waitlist entries
                </p>
              </div>
              
              <button
                onClick={exportToCSV}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-900 to-purple-800 text-white font-inter font-semibold rounded-xl hover:from-purple-950 hover:to-purple-900 transition-all duration-200"
              >
                <Download className="w-5 h-5 mr-2" />
                Export CSV
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-purple-900" />
                </div>
                <div>
                  <p className="font-opensans text-gray-600 text-sm">Total Signups</p>
                  <p className="font-inter text-2xl font-bold text-gray-900">{waitlistEntries.length}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-gold-600" />
                </div>
                <div>
                  <p className="font-opensans text-gray-600 text-sm">This Week</p>
                  <p className="font-inter text-2xl font-bold text-gray-900">
                    {waitlistEntries.filter(entry => {
                      const entryDate = new Date(entry.created_at);
                      const weekAgo = new Date();
                      weekAgo.setDate(weekAgo.getDate() - 7);
                      return entryDate > weekAgo;
                    }).length}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mr-4">
                  <Calendar className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="font-opensans text-gray-600 text-sm">Today</p>
                  <p className="font-inter text-2xl font-bold text-gray-900">
                    {waitlistEntries.filter(entry => {
                      const entryDate = new Date(entry.created_at);
                      const today = new Date();
                      return entryDate.toDateString() === today.toDateString();
                    }).length}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Waitlist Table */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="font-inter text-xl font-bold text-gray-900">
                Waitlist Entries
              </h2>
            </div>

            {error && (
              <div className="px-6 py-4 bg-red-50 border-b border-red-200">
                <p className="font-opensans text-red-600">{error}</p>
              </div>
            )}

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left font-inter font-semibold text-gray-900">Email</th>
                    <th className="px-6 py-4 text-left font-inter font-semibold text-gray-900">Name</th>
                    <th className="px-6 py-4 text-left font-inter font-semibold text-gray-900">Date Joined</th>
                    <th className="px-6 py-4 text-left font-inter font-semibold text-gray-900">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {waitlistEntries.map((entry) => (
                    <tr key={entry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-opensans text-gray-900">{entry.email}</td>
                      <td className="px-6 py-4 font-opensans text-gray-600">{entry.name || '-'}</td>
                      <td className="px-6 py-4 font-opensans text-gray-600">
                        {new Date(entry.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-3 py-1 bg-green-100 text-green-800 text-sm font-opensans rounded-full">
                          {entry.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {waitlistEntries.length === 0 && (
                <div className="px-6 py-12 text-center">
                  <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="font-opensans text-gray-600">No waitlist entries yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;