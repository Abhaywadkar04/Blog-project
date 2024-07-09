import React from 'react'
import { Signup as SignupComponent } from '../components'

function Signup() {
  return (
    <div className='flex items-center justify-center min-h-screen bg-center bg-cover' style={{backgroundImage: `url("https://images.pexels.com/photos/2189696/pexels-photo-2189696.jpeg?auto=compress&cs=tinysrgb&w=800")`}}>
        <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='text-center'>
              
            </div>
            <SignupComponent />
        </div>
    </div>
  )
}

export default Signup
