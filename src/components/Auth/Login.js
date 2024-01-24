import React from 'react';
import AuthForm from './AuthForm';

const Login = (props) => {
  const handleLoginSubmit = async (credentials, navigate) => {
    console.log('Login form submitted');

    try {
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
    }
  };

  return <AuthForm formType="login" onSubmit={handleLoginSubmit} />;
};

export default Login;
