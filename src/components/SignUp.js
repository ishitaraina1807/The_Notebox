import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Signup form submitted');
    const { name, email, password, confirmPassword } = credentials;

    try {
      if (password !== confirmPassword) {
        throw new Error("Passwords don't match");
      }

      const response = await fetch('http://localhost:5000/api/auth/createuser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const json = await response.json();
      console.log('Response:', json);

      if (json.success) {
        // Save the auth token and redirect
        localStorage.setItem('token', json.authToken);
        navigate('/');
        props.showAlert('Account created successfully', 'success');
      } else {
        props.showAlert('Invalid Credentials', 'danger');
      }
    } catch (error) {
      console.error('Error during signup:', error.message);
      props.showAlert("User already exist", 'danger');
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up to Notebox</h1>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Enter Your Name
        </label>
        <input type="text" className="form-control" id="name" name="name" onChange={onChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="email"
          aria-describedby="emailHelp"
          name="email"
          onChange={onChange}
          minLength={5}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input type="password" className="form-control" id="password" name="password" onChange={onChange} required />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">
          Confirm Password
        </label>
        <input
          type="password"
          className="form-control"
          id="confirmPassword"
          name="confirmPassword"
          onChange={onChange}
          minLength={5}
          required
        />
      </div>
      <button type="submit" className="btn btn-light">
        Submit
      </button>
    </form>
  );
};

export default SignUp;
