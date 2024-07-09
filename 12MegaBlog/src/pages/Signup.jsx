import React from 'react'
import { Signup as SignupComponent } from '../components'
import useTheme from '../contexts/theme';

function Signup() {
  const { theme } = useTheme();
  return (
    <div className='flex items-center justify-center min-h-screen bg-center bg-cover' style={{backgroundImage: `url("https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=800")`}}>
      <div className={`w-full sm:max-w-md mt-6 px-6 py-4 bg-${theme === 'light' ? 'black' : 'white'} shadow-md overflow-hidden sm:rounded-lg opacity-60`}>
            <SignupComponent />
        </div>
    </div>
  )
}

export default Signup
