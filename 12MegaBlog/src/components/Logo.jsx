import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='w-full' style={{width: width}}>
      <img src="https://t4.ftcdn.net/jpg/03/76/92/69/360_F_376926988_1YvHWLHee92O14OmYxsMcCQ5ta9P3VVv.jpg" alt="blog logo" className='w-full' />
    </div>
  )
}

export default Logo