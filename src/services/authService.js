// src/services/authService.js

import axios from 'axios';

export const registerUser = async (username, password) => {
    try {
        const response = await axios.post('/api/register', { username, password });
        return response.data;
    } catch (error) {
        throw new Error('Registration failed');
    }
};

export const loginUser = async (username, password) => {
    try {
      const response = await fetch('http://localhost:8081/api/login', { // Ensure this URL matches your backend URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      const data = await response.json();
      return data;
  } catch (error) {
      console.error('Login failed:', error);
      throw error;
  }
};