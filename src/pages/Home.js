import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
        <div className='min-h-screen bg-[url("https://i.ytimg.com/vi/f9ydfcm5UTM/maxresdefault.jpg")] bg-cover'>
            <nav className='flex justify-between p-2 bg-slate-800 bg-opacity-60 sticky'>
                <div className='leftNav flex items-center'>
                    <span className='font-Roboto text-3xl text-stone-500 font-bold'><Link to='/'>MoviesLand</Link></span>
                    <ul className='ml-5 text-lg font-Roboto text-slate-400 font-semibold'>
                        <li><Link to='/movies'>Movies</Link></li>
                    </ul>
                </div>
                <span className='flex items-center'>
                    <Link to="/login" className='font-Roboto text-md text-stone-800 font-semibold bg-slate-300 hover:text-stone-400 transition-all px-4 py-2 rounded-md mr-2'>Sign In</Link>
                    <Link className='font-Roboto text-md text-slate-50 font-semibold bg-stone-600 hover:bg-stone-400 transition-all px-4 py-2 rounded-md'>Sign Up</Link>
                </span>
            </nav>
        </div>
        <div className='flex bg-stone-300 pl-10 pr-10 pt-20 pb-20 font-Roboto'>
            <div className='flex flex-col justify-center pl-4 pr-4'>
                <h2 className='text-3xl font-extrabold text-slate-800'>
                    Lorem ipsum dolor.  
                </h2>
                <h3 className='text-xl font-semibold text-slate-800'>
                    Lorem ipsum dolor sit, amet consectetur.
                </h3>
                <p className='text-md'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit habitant, felis mauris eget.
                </p>
            </div>
            <div>
                <img src='https://i.ibb.co/hdkPQvH/Mvp-XRyewk3-Ub-B8ok-C5s-Z2i-transformed.png' className='h-80' alt='Lorem'/>
            </div>
        </div>
        <div className='flex pt-20 pb-20 bg-stone-500 font-Roboto'>
            <div>
                <img src='https://i.ibb.co/hdkPQvH/Mvp-XRyewk3-Ub-B8ok-C5s-Z2i-transformed.png' className='h-80' alt='Lorem'/>
            </div>
            <div className='flex flex-col justify-center pl-4 pr-4'>
                <h2 className='text-3xl font-extrabold text-slate-800'>
                    Lorem ipsum dolor.  
                </h2>
                <h3 className='text-xl font-semibold text-slate-800'>
                    Lorem ipsum dolor sit, amet consectetur.
                </h3>
                <p className='text-md'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit habitant, felis mauris eget.
                </p>
            </div>
            
        </div>
           <div className='flex flex-col  bg-stone-300 pt-20 pb-20'>
                <h4 className='text-2xl font-Roboto mb-10 text-center'>Frequently Asked Questions:</h4>
                <ul className='px-40'>
                    <li className='p-7 bg-stone-600 hover:bg-stone-500 border-2'>Lorem ipsum dolor sit, amet consectetur adipiscing, elit lacus.?</li>
                    <li className='p-7 bg-stone-600 hover:bg-stone-500 border-2'>Lorem ipsum dolor sit, amet consectetur adipiscing, elit lacus.?</li>
                    <li className='p-7 bg-stone-600 hover:bg-stone-500 border-2'>Lorem ipsum dolor sit, amet consectetur adipiscing, elit lacus.?</li>
                    <li className='p-7 bg-stone-600 hover:bg-stone-500 border-2'>Lorem ipsum dolor sit, amet consectetur adipiscing, elit lacus.?</li>
                    <li className='p-7 bg-stone-600 hover:bg-stone-500 border-2'>Lorem ipsum dolor sit, amet consectetur adipiscing, elit lacus.?</li>
                </ul>
           </div>
    </div>
  )
}
