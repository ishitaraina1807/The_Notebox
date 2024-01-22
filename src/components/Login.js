import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setCredentials({ ...credentials, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setCredentials({ ...credentials, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login form submitted');

    try {
      setLoading(true);

      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: credentials.email, password: credentials.password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log('Response:', json);

      if (json.success) {
        localStorage.setItem('token', json.authToken);
        props.showAlert('Logged In successfully', 'success');
        navigate('/');
      } else {
        props.showAlert('Invalid Credentials', 'danger');
      }
    } catch (error) {
      console.error('Error during login:', error);
      props.showAlert('Error during login', 'danger');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container mx-4 my-4'>
      <h1>Login to Notebox</h1>
      <form onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>
            Email address
          </label>
          <input
            type='email'
            className='form-control'
            id='email'
            value={credentials.email}
            onChange={handleEmailChange}
            aria-describedby='emailHelp'
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            value={credentials.password}
            onChange={handlePasswordChange}
            className='form-control'
            id='password'
            required
          />
        </div>
        <button type='submit' className='btn btn-light' disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
    </div>
  );
};

export default Login;
