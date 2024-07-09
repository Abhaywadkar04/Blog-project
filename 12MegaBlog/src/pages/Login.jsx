import React from 'react'
import { Login as loginComponent } from '../components'

function Login() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-center bg-cover' style={{backgroundImage: `url("https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=800")`}}>
      <div className='w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg'>
        <loginComponent />
      </div>
    </div>
  )
}

export default Login

