import React, { useState } from 'react';
import authService from '../appwrite/auth';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import useTheme from '../contexts/theme';

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const { theme } = useTheme();

  const create = async (data) => {
    setError('');
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    
      <div className={`mx-auto w-full max-w-lg rounded-xl p-10 border border-black/10 ${theme === 'light' ? 'bg-white ' : 'bg-black '}`}>
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2
          className={`text-center text-2xl font-bold leading-tight ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          Sign up to create account
        </h2>
        <p
          className={`mt-2 text-center text-base ${
            theme === 'light' ? 'text-black' : 'text-white'
          }`}
        >
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              {...register('name', {
                required: true,
              })}
              className={`p-2 rounded border ${theme === 'light' ? 'text-black' : 'text-white'}`}
              style={{
                backgroundColor: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
                borderColor: theme === 'light' ? 'black' : 'white',
              }}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              type="email"
              {...register('email', {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    'Email address must be a valid address',
                },
              })}
              className={`p-2 rounded border ${theme === 'light' ? 'text-black' : 'text-white'}`}
              style={{
                backgroundColor: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
                borderColor: theme === 'light' ? 'black' : 'white',
              }}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Enter your password"
              {...register('password', {
                required: true,
              })}
              className={`p-2 rounded border ${theme === 'light' ? 'text-black' : 'text-white'}`}
              style={{
                backgroundColor: theme === 'light' ? 'white' : 'black',
                color: theme === 'light' ? 'black' : 'white',
                borderColor: theme === 'light' ? 'black' : 'white',
              }}
            />
            <Button
              type="submit"
              className={`w-full ${
                theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              Create Account
            </Button>
          </div>
        </form>
      </div>
    
  );
}

export default Signup;
