import React from 'react'

function Footer() {
  return (
    <div><div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
    &copy; {new Date().getFullYear()} Copyright:{' '}
    <a className='ms-2'>
      &reg; Alan Thomas
    </a>
  </div></div>
  )
}

export default Footer