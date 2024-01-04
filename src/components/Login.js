import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {

      // Send login data to the authentication endpoint
      const response = await axios.post('http://localhost:8080/api/v1/user/login', {
        username,
        password,
      });

      if (response.data.data) {
        // Authentication successful, redirect to the dashboard
        localStorage.setItem('auth', true);
        window.location.href = '/dashboard';
      } else {
        // Authentication failed
        localStorage.setItem('auth', false);
        setError('Incorrect username or password. Please try again.');
      }
    } catch (error) {
      setLoading(false);
      console.log(error.response.data.message)
      setError('An error occurred while attempting to log in.');
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-cyan-700 to-blue-800">
      <div className="bg-white rounded-lg p-8 shadow-md w-full max-w-md transform transition-transform duration-500 hover:scale-105 hover:shadow-lg">
        <h2 className="text-3xl font-bold text-blue-800 mb-4">Login</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <input
              type="text"
              placeholder="Username"
              className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 transform hover:scale-105"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              className="w-full py-2 px-3 text-gray-700 bg-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-transform duration-300 transform hover:scale-105"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 focus:outline-none transition-transform duration-300 transform hover:scale-105"
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        {error && (
          <p className="text-red-600 mt-4">{error}</p>
        )}
      </div>
    </div>
  );
};

export default Login;
