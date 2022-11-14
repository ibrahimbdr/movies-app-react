import React from 'react'
import { Link, useParams, Redirect } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { useState, useEffect, useSearchParams } from 'react';
import axiosInstance from '../axios config/axiosInstance';
import { FaStar } from 'react-icons/fa';
import { FcLike, FcDislike, FcLikePlaceholder } from 'react-icons/fc';
import { useDispatch, useSelector } from 'react-redux';
import { addFavMovies, addMovies } from '../store/actions/movies';

export const FavMovies = () => {
    const my_FavMovies = useSelector((state)=>state.favMovies);
    const my_movies = useSelector((state)=>state.movies);
    // const films = 
    // const [films, setFilms] = useState(my_movies.filter(movie => {
    //   return movie.liked === true
    // }))
    const dispatch = useDispatch();
    function handleLikeBtn (film) {
      let newList = my_movies;
      if(film.liked) {
          console.log("liked");
          film.liked = false;
          console.log(film.liked);
          let newFavList = my_FavMovies.filter(favFilm => {
            return favFilm.liked === true;
        })
        dispatch(addFavMovies(newFavList));
      }else{
          console.log("disliked");
          film.liked = true;
          console.log(film.liked);
          dispatch(addFavMovies([...my_FavMovies, film]));
      }
      newList.filter(movie => {
        return movie.liked === true
      })
      // setFilms([...newList])
      
      dispatch(addMovies([...newList]));
      console.log([...newList]);
      console.log(my_FavMovies);
  }
  //   useEffect(() => {
      
  // }, [films])

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
                    <h4 className='animate-pulse-limited flex items-center'><FcLike className='mr-1 text-2xl'/>{my_FavMovies.length}</h4>
                </div>
            </nav>
        </div>
        <h2 className='font-Roboto text-2xl pl-9 pt-8 font-semibold pb-10 bg-stone-500'>MoviesLand Favorite Films</h2>
        
        <div className='flex flex-wrap justify-center items-center pb-10 bg-stone-500'>
            {my_FavMovies.map((film) => {
                return (
                    <div className='w-80 mb-3' key={film.id}>
                        <Link to={`/movies/${film.id}`}>
                        <img src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} className='w-72' alt=''/>
                        
                        </Link>
                        <div className='flex justify-between bg-stone-400 mr-8 p-3'>
                        <h5 className='font-normal text-sm'>{film.title}</h5>
                        <h6 className='font text-sm font-extrabold flex items-center'><button className='mr-1 text-xl' onClick={()=>{handleLikeBtn(film)}}>{film.liked?<FcDislike/>:<FcLikePlaceholder/>}</button><FaStar className='text-amber-400 mr-1 text-xl'/>{film.vote_average}</h6>
                        </div>
                    </div>
                )
            })}
        </div>
        


    </div>
  )
}
