import React from 'react'
import NavLeft from './NavLeft'
import NavRight from "./NavRight"

const NavBar = () => {
  return (
    <div className=' flex bg-gray-500 justify-between'>
      <NavLeft />
      <NavRight />
    </div>
  )
}

export default NavBar