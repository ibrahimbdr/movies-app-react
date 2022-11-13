import React from 'react'
import { Link } from 'react-router-dom'
export const Login = () => {
  return (
    <div>
    <div className='bg-transparent'>
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
    <div className='min-h-screen bg-stone-500 flex justify-center items-center'>
        <form className='w-96 bg-stone-400 p-16'>
        <div>
            <label htmlFor='username' className='font-bold font-roboto text-xl'>Username</label>
            <input type='text' name="username" id="username"  className='w-full h-8 rounded-md p-2' placeholder='Username'/>
        </div>
        <div className='mt-8'>
            <label htmlFor='password' className='font-bold font-roboto text-xl'>Password</label>
            <input type='password' name="password" id="password" className='w-full h-8 rounded-md p-2'/>
        </div>
        </form>
    </div>
    </div>
  )
}
