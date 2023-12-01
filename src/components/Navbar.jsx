import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = () => {
  return (
    <div className='border-b-2 border-slate-100 fixed w-full bg-white'>     
        <div className='flex max-w-[1080px] justify-between mx-auto p-6'>
            <div>
                <img src="./logo.svg" alt="" height="" width={150}/>
            </div>
            <div>
                <ul className='flex gap-x-8 text-zinc-500 cursor-pointer'>
                    <li className='hover:text-[#387ed1] '>Signup</li>
                    <li className='hover:text-[#387ed1] '>About</li>
                    <li className='hover:text-[#387ed1] '>Products</li>
                    <li className='hover:text-[#387ed1] '>Pricing</li>
                    <li className='hover:text-[#387ed1] '>Support</li>
                    <li><MenuIcon/></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
