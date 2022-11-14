import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axiosInstance from '../axios config/axiosInstance';
import './MovieInfo.css'
import { AiOutlineSmile } from 'react-icons/ai'
import { BsFillPlayFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
export const MovieInfo = () => {
    const [filmInfo, setFilmInfo] = useState({});
    const [filmGenres, setFilmGenres] = useState([]);
    const params = useParams();
    useEffect(() => {
        axiosInstance.get(`/movie/${params.id}?api_key=cd5cc4af3750ab19c216b0a7f80654a9`)
        .then((res) => {
            setFilmInfo(res.data)
            setFilmGenres(res.data.genres)
        })
    }, [])

  return (
    <div>
        <div className=' bg-stone-500 bg-cover' key={filmInfo.id}>
            <nav className='flex justify-between p-2 bg-slate-800 bg-opacity-60 sticky'>
                <div className='leftNav flex items-center'>
                    <span className='font-Roboto text-3xl text-stone-500 font-bold'><Link to='/'>MoviesLand</Link></span>
                    <ul className='ml-5 text-lg font-Roboto text-slate-400 font-semibold'>
                        <li><Link to='/movies'>Movies</Link></li>
                    </ul>
                </div>
                
            </nav>
        </div>
    <div className='mb-96'>
        <div className="container">
            <div className="cellphone-container">    
                <div className="movie pb-10">       
                    <div className="menu"><i className="material-icons"></i></div>
                    <div className="movie-img"><img src={`https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`} alt=""/></div>
                    <div className="text-movie-cont">
                    <div className="mr-grid">
                        <div className="col1">
                        <h1>{filmInfo.title}</h1>
                        <ul className="movie-gen">
                            <li>{filmInfo.runtime} min</li>
                            <li>{filmGenres.map(genre => {
                                return (<span>- {genre.name}</span>)
                            })}</li>
                        </ul>
                        </div>
                    </div>
                    <div className="mr-grid summary-row">
                        <div className="col2">
                        <h5>SUMMARY</h5>
                        </div>
                        <div className="col2">
                        <ul className="movie-likes">
                            <li><i className="material-icons"><AiOutlineSmile /></i>{filmInfo.vote_count}</li>
                            <li><i className="material-icons"><AiOutlineSmile /></i>{filmInfo.vote_average}</li>
                        </ul>
                        </div>
                    </div>
                    <div className="mr-grid">
                        <div className="col1">
                        <p className="movie-description">{filmInfo.overview}</p>
                        </div>
                    </div>
                    <div className="mr-grid actors-row">
                        <div className="col1">
                        <p className="movie-actors">{filmInfo.homepage}</p>
                        </div>
                    </div>
                    <div className="mr-grid action-row">
                        <div className="col2"><div className="watch-btn px-2 w-36"><h3 className='w-44 flex items-center'><i className="material-icons"><BsFillPlayFill/></i>WATCH TRAILER</h3></div>
                        </div>
                        <div className="col6 action-btn"><i className="material-icons">&#xE161;</i>
                        </div> 
                        <div className="col6 action-btn"><i className="material-icons">&#xE866;</i>
                        </div>
                        <div className="col6 action-btn"><i className="material-icons">&#xE80D;</i>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>

    </div>
  )
}
