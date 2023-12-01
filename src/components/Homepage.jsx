import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const Homepage = () => {
  return (
    <div className='flex flex-col max-w-[1080px] mx-auto'>
        <img src="./landing.png" alt="" className='m-20' />
        <div className='mx-auto flex flex-col'>
            <h1 className='font-bold text-4xl text-slate-700 ml-40 mb-5'>Invest in everything</h1>
            <p className='text-slate-800 text-xl mb-20'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        </div>
        <Box sx={{ '& button': { m: 1 } }} className='mx-auto'>
            <Button size='large' variant="contained" className='w-40'>Sign up now</Button>
        </Box>
    </div>
  )
}
