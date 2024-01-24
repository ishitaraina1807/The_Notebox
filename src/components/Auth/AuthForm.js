import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = ({ formType, onSubmit }) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
    name: '', // Include name for signup form
    confirmPassword: '', // Include confirmPassword for signup form
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`${formType} form submitted`);

    onSubmit(credentials, navigate);
  };

  return (
    <div className="mx-auto my-12 max-w-md">
      <form onSubmit={handleSubmit} className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl text-center gradient-text font-semibold mb-4">{formType === 'login' ? 'Login' : 'Sign up'} to Notebox</h1>

        {formType === 'signup' && (
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-200">
              Enter Your Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full text-black border rounded-md"
              id="name"
              name="name"
              onChange={handleInputChange}
            />
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-200">
            Email address
          </label>
          <input
            type="email"
            className="mt-1 text-black p-2 w-full border rounded-md"
            id="email"
            aria-describedby="emailHelp"
            name="email"
            onChange={handleInputChange}
            minLength={5}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-200">
            Password
          </label>
          <input
            type="password"
            className="mt-1 text-black p-2 w-full border rounded-md"
            id="password"
            name="password"
            onChange={handleInputChange}
            required
          />
        </div>

        {formType === 'signup' && (
          <div className="mb-4">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-200">
              Confirm Password
            </label>
            <input
              type="password"
              className="mt-1 text-black p-2 w-full border rounded-md"
              id="confirmPassword"
              name="confirmPassword"
              onChange={handleInputChange}
              minLength={5}
              required
            />
          </div>
        )}

        <button
          type="submit"
          className="px-4 font-bold py-2 text-gray-800 rounded-lg bg-[#ECEE81] hover:bg-white transition"
        >
          {formType === 'login' ? 'Login' : 'Sign up'}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
