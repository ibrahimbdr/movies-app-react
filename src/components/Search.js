import React from 'react'
import { Link, useParams, Redirect } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect, useSearchParams } from 'react';
import axiosInstance from '../axios config/axiosInstance';
import { FaStar } from 'react-icons/fa'

export const Search = () => {
    let [query, setQuery]= useState('');
    // new URLSearchParams(this.props.location.search).get("searchMovie")
    // const [searchParams, setSearchParams] = useSearchParams();
    // searchParams.get("searchMovie")
    const searchParams = new URLSearchParams(document.location.search)
    let result = searchParams.get('searchM')
    setQuery(result)
    console.log(query);
    const queryS = document.location.search.split('=')[1];
    console.log(queryS);
    const [films, setFilms] = useState({})
    useEffect(() => {
            axiosInstance.get(`/search/movie?api_key=cd5cc4af3750ab19c216b0a7f80654a9&query=${queryS}`)
            .then((res) => {
            setFilms(res.data.results)
            console.log(films);
            // console.log(searchParams);
        }).catch((err) => {
            console.log(err);
        })
       
    }, [])

    // useEffect(() => {
        
    // }, [])



  return (
    // <div>
        
    //     <div className=' bg-stone-500 bg-cover'>
    //         <nav className='flex justify-between p-2 bg-slate-800 bg-opacity-60 sticky'>
    //             <div className='leftNav flex items-center'>
    //                 <span className='font-Roboto text-3xl text-stone-500 font-bold'><Link to='/'>MoviesLand</Link></span>
    //                 <ul className='ml-5 text-lg font-Roboto text-slate-400 font-semibold'>
    //                     <li><Link to='/movies'>Movies</Link></li>
    //                 </ul>
    //             </div>
    //             <div className='flex items-center'>
    //                 <form className='flex items-center' action='/search'  onSubmit={(e) => search(e)}>
    //                 <label className='text-slate-300 pr-2 text-xl'>
    //                     <button type='submit'><BsSearch/></button>
    //                 </label>
    //                 <input type="search" name="searchM" id="searchM" className="form-input w-72 h-8 rounded-xl bg-stone-200 p-2" placeholder="Search"/>
    //                 </form>
    //             </div>
    //         </nav>
    //     </div>
    //     <h2 className='font-Roboto text-2xl pl-9 pt-8 font-semibold pb-10 bg-stone-500'>MoviesLand Films</h2>
        
    //     <div className='flex flex-wrap justify-center items-center pb-10 bg-stone-500'>
    //         {films.map((film) => {
    //             return (
    //                 <div className='w-80 mb-3' key={film.id}>
    //                     <Link to={`/movies/${film.id}`}>
    //                     <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} className='w-72' alt=''/>
                        
    //                     </Link>
    //                     <div className='flex justify-between bg-stone-400 mr-8 p-3'>
    //                     <h5 className='font-normal text-sm'>{film.title}</h5>
    //                     <h6 className='font text-sm font-extrabold flex items-center'><FaStar className='text-amber-400 mr-1'/>{film.vote_average}</h6>
    //                     </div>
    //                 </div>
    //             )
    //         })}
    //     </div>
     

    // </div>
    <></>
  )
}
