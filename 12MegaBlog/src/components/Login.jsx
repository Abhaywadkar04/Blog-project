import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"
import useTheme from '../contexts/theme';
function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")
    const { theme } = useTheme();

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div
          className='bg-cover bg-center h-screen'
          style={{
            backgroundImage:
              'url(https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          }}
        >
          <div className="flex items-center justify-center w-full h-full bg-black/30">
            <div
              className={`mx-auto w-full max-w-lg ${
                theme === 'light' ? 'bg-white opacity-60' : 'bg-black opacity-60'
              } rounded-xl p-10`}
            >
              <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                  <Logo width="100%" />
                </span>
              </div>
              <h2 className={`text-center text-2xl font-bold leading-tight ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                Sign in to your account
              </h2>
              <p className={`mt-2 text-center text-base ${theme === 'light' ? 'text-black' : 'text-white'}/60`}>
                Don&apos;t have any account?&nbsp;
                <Link
                  to="/signup"
                  className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                  Sign Up
                </Link>
              </p>
              {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
              <form onSubmit={handleSubmit(login)} className="mt-8">
                <div className="space-y-5">
<Input 
  label="Email: "
  className={`p-2 rounded border ${theme === 'light' ? 'text-black' : 'text-white'}`}
  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
    borderColor: theme === 'light' ? 'black' : 'white', // Add borderColor here
  }}
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
/>


<Input 
  label="Password: "
  type="password"
  className={`p-2 rounded border ${theme === 'light' ? 'text-black' : 'text-white'}`}
  style={{
    backgroundColor: theme === 'light' ? 'white' : 'black',
    color: theme === 'light' ? 'black' : 'white',
    borderColor: theme === 'light' ? 'black' : 'white', // Add borderColor here
  }}
  placeholder="Enter your password"
  {...register('password', {
    required: true,
  })}
/>

<Button 
  type="submit" 
  className={`w-full  ${theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'}`}
>
  Sign in
</Button>

                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };
    
    export default Login;