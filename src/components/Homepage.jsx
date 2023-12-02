import React from 'react'
import { ButtonSignin } from './ButtonSignin';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TwitterIcon from '@mui/icons-material/Twitter';

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

        <div>
            <div className='flex justify-between mt-32'>
                <div className='w-[50%] flex flex-col gap-y-4'>                    
                    <h1 className='font-bold text-4xl text-slate-700 mb-4 '>Unbeatable pricing</h1>
                    <p className='text-slate-800 text-lg'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <p className='text-[#387ed1] hover:text-slate-800'>See pricing <span><ArrowForwardIcon/></span></p>
                </div>
                <div className='flex'>
                    <div className='border w-[50%]'>
                        <p className='font-medium text-5xl text-slate-700 ml-24 mt-8 mb-8 '>₹0</p>
                        <p className=' m-8 text-center'>Free equity delivery and direct mutual funds</p>
                    </div>
                    <div className='border w-[50%]'>
                        <p className='font-medium text-5xl text-slate-700 ml-24 mt-8 mb-8'>₹20</p>
                        <p className=' m-8 text-center'>Intraday and F&O</p>
                    </div>
                </div>
            </div>
            <div className='flex mt-32'>
                <img src="./index-education.svg" alt="" />
                <div className='flex flex-col w-[50%] ml-24 gap-y-4 mt-20'>
                    <h1 className='font-bold text-2xl text-slate-700 mb-4 '>Free and open market education</h1>
                    <p className='text-slate-800 '>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <p className='text-[#387ed1] hover:text-slate-800'>Varsity <span><ArrowForwardIcon/></span></p>
                    <p className='text-slate-800 '>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <p className='text-[#387ed1] hover:text-slate-800'>TradingQ&A <span><ArrowForwardIcon/></span></p>
                </div>
            </div>
            <div className='text-center mt-32 flex flex-col gap-y-4'>
                <h1 className='font-bold text-2xl text-slate-700 mb-4 '>Open a Zerodha Account</h1>
                <p className='text-slate-800 mb-4'>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
                <ButtonSignin/>
            </div>
        </div>

        <div>
            <div>
                <div>
                    <img src="./logo.svg" alt="" />
                    <p>© 2010 - 2023, Zerodha Broking Ltd. All rights reserved.</p>
                    <div>
                        <TwitterIcon/>
                    </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    </div>

  )
}
