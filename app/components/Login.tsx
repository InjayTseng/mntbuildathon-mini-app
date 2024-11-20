'use client';

import { useState } from 'react';
import { useTelegram } from '../hooks/useTelegram';

export function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const webApp = useTelegram();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate login delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      webApp?.showAlert('Login successful! 🎉');
      // Here you would typically handle the actual login logic
    } catch (error) {
      webApp?.showAlert('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md space-y-8 p-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-white mb-2">Welcome Back! 👋</h2>
        <p className="text-gray-200">
          Sign in to continue to MNT Buildathon
        </p>
      </div>

      <form onSubmit={handleLogin} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border 
                       border-gray-300 rounded-md bg-white bg-opacity-10 
                       placeholder-gray-400 text-white focus:outline-none 
                       focus:ring-2 focus:ring-telegram-primary focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-200 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border 
                       border-gray-300 rounded-md bg-white bg-opacity-10 
                       placeholder-gray-400 text-white focus:outline-none 
                       focus:ring-2 focus:ring-telegram-primary focus:border-transparent"
              placeholder="Enter your password"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-telegram-primary focus:ring-telegram-primary"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-200">
              Remember me
            </label>
          </div>

          <button
            type="button"
            className="text-sm text-telegram-primary hover:text-telegram-secondary"
          >
            Forgot password?
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`btn-telegram w-full flex justify-center py-3 ${
            isLoading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isLoading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            </span>
          ) : (
            'Sign in'
          )}
        </button>

        <div className="text-center text-sm text-gray-200">
          Don't have an account?{' '}
          <button
            type="button"
            className="text-telegram-primary hover:text-telegram-secondary"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
}
