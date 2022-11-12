import React from 'react'

export const Footer = () => {
  return (
    <div className='bg-stone-700 px-8 py-12'>
        <div className='flex justify-center items-center'>
            <span className='font-Roboto text-xl text-stone-500 font-bold'>MoviesLand</span>
        </div>
        <div className='text-center mt-6'>
            <a href='#' className='text-stone-400 mr-3'>Terms and Privacy Notice</a>
            <a href='#' className='text-stone-400 mr-3'>Cookie Notice</a>
            <a href='#' className='text-stone-400 mr-3'>Send us feedback</a>
            <a href='#' className='text-stone-400 mr-3'>Help</a>
        </div>
        <div className='text-center mt-6    '>
            <span>&copy; 2022, MoviesLand.com, Inc</span>
        </div>
    </div>
  )
}
