import React from 'react'
import BlogLogo from '../assets/blog-logo.png'

function Logo({width = '100px'}) {
  return (
    <img src={BlogLogo} alt="Blogger Logo" width={width} />
  )
}

export default Logo