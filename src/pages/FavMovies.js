import React from 'react'
import { Link, useParams, Redirect } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect, useSearchParams } from 'react';
import axiosInstance from '../axios config/axiosInstance';
import { FaStar } from 'react-icons/fa';
import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { addFavMovies } from '../store/actions/movies';

export const FavMovies = () => {
    const fav_movies = useSelector((state)=>state.favMovies);
    const [films, setFilms] = useState([])
    const dispatch = useDispatch();
    let [fav, setfav] = useState([]);
    const [like, setLike] = useState(false)
    function handleLikeBtn (data) {

        if(fav_movies.includes(data)) {
            const newList = fav_movies.filter(mov => {
                return mov != data;
            })
            dispatch(addFavMovies([...newList]));
            setLike(false)
        }else{
            dispatch(addFavMovies([...fav_movies,data]));
            setLike(true)
        }
        console.log(fav_movies);
    }
  //   useEffect(() => {
      
  //         axiosInstance.get(`/movie/popular?api_key=cd5cc4af3750ab19c216b0a7f80654a9`)
  //         .then((res) => {
  //         setFilms(res.data.results)
  //         setfav(films.filter(film => {
  //           fav_movies.forEach(fav_m => {
  //             return film.id === fav_m
  //           })
  //         }))
  //         console.log(films);
  //         // console.log(searchParams);
  //     }).catch((err) => {
  //         console.log(err);
  //     })
      
  // }, [])

  return (
    <div>
        
        <div className=' bg-stone-500 bg-cover'>
            <nav className='flex justify-between p-2 bg-slate-800 bg-opacity-60 sticky'>
                <div className='leftNav flex items-center'>
                    <span className='font-Roboto text-3xl text-stone-500 font-bold'><Link to='/'>MoviesLand</Link></span>
                    <ul className='ml-5 text-lg font-Roboto text-slate-400 font-semibold flex'>
                        <li><Link to='/movies'>Movies</Link></li>
                        <li className='ml-3'><Link to='/favmovies'>Favorite Movies</Link></li>
                    </ul>
                </div>
                <div className='flex items-center'>
                    <h4>likes-{fav_movies.length}</h4>
                </div>
            </nav>
        </div>
        <h2 className='font-Roboto text-2xl pl-9 pt-8 font-semibold pb-10 bg-stone-500'>MoviesLand Favorite Films</h2>
        
        <div className='flex flex-wrap justify-center items-center pb-10 bg-stone-500'>
            {fav_movies.map((film) => {
                return (
                    <div className='w-80 mb-3' key={film.id}>
                        <Link to={`/movies/${film.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} className='w-72' alt=''/>
                        
                        </Link>
                        <div className='flex justify-between bg-stone-400 mr-8 p-3'>
                        <h5 className='font-normal text-sm'>{film.title}</h5>
                        <h6 className='font text-sm font-extrabold flex items-center'><button className='mr-1' onClick={()=>{handleLikeBtn(film)}}>{like?<FcLike/>:<FcLikePlaceholder/>}</button><FaStar className='text-amber-400 mr-1'/>{film.vote_average}</h6>
                        </div>
                    </div>
                )
            })}
        </div>
        


    </div>
  )
}
