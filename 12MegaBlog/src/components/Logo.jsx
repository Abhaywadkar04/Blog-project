import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className='w-full' style={{width: width}}>
      <img src="https://static.vecteezy.com/system/resources/previews/036/354/770/large_2x/letter-e-s-monogram-logo-design-template-vector.jpg" alt="blog logo" className='w-full' />
    </div>
  )
}

export default Logo