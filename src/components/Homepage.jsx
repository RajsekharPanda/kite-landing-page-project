import React from 'react'
import { ButtonSignin } from './ButtonSignin';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Homepage = () => {
  return (
    <div className='flex flex-col max-w-[1080px] mx-auto py-20'>
        <img src="./landing.png" alt="" className='m-20' />
        <div className='mx-auto flex flex-col'>
            <h1 className='font-bold text-4xl text-slate-700 ml-40 mb-5'>Invest in everything</h1>
            <p className='text-slate-800 text-xl mb-20'>Online platform to invest in stocks, derivatives, mutual funds, and more</p>
        </div>
        <div className='mx-auto'>
            <ButtonSignin/>
        </div>

        <div>
            <div className='flex justofy-between mt-28 gap-x-20'>
                <img src="./largest-broker.svg" alt="" />
                <div className='flex flex-col gap-y-10'>
                    <h1 className='font-bold text-4xl text-slate-700'>Largest stock broker in India</h1>
                    <p className='text-slate-800'>1+ Crore Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
                    <div className='flex gap-x-32 text-slate-700'>
                        <ol className='list-disc'>
                            <li>Futures and Options</li>
                            <li>Commodity derivatives</li>
                            <li>Currency derivatives</li>
                        </ol>
                        <ol className='list-disc'>
                            <li>Stocks & IPOs</li>
                            <li>Direct mutual funds</li>
                            <li>Bonds and Govt. Securities</li>
                        </ol>
                    </div>
                    <img src="./press-logos.png" alt="" className='mt-10'/>
                </div>
            </div>
        </div>

        <div className='mx-auto'>
            <div className='mx-auto flex flex-col gap-y-4 mt-60 max-w-11/12'>
                <div className='mx-auto flex flex-col gap-y-4'>
                    <h1 className='font-bold text-4xl text-slate-700 ml-64'>The Zerodha Universe</h1>
                    <p className='text-slate-800 text-xl'>A whole ecosystem of modern investment apps tailored to specific needs, built from the ground up</p>
                </div>
                <img src="./ecosystem.png" alt="" />
                <div className='flex gap-6 mx-auto text-[#387ed1]'>
                    <button className='hover:text-slate-800'>Explore out products <span><ArrowForwardIcon/></span></button>
                    <button className='hover:text-slate-800'>Try kite demo <span><ArrowForwardIcon/></span></button>
                </div>
            </div>
        </div>
    </div>

  )
}
