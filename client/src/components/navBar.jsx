import React from 'react'
import logo from '../assets/logo.svg'

function NavBar() {
    return(
        <div className='flex items-center gap-4'>
          <img src={logo} className='h-15 w-15 ml-3 mt-4' alt='logo'/>
          <h4 className='font-[jetbrains mono] font-bold text-black text-[52px]'>serviceHub</h4>
        </div>
    )
}

export default NavBar
