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
//     <div class="min-h-screen grid place-items-center font-mono bg-gray-900">
      
//     <div class="bg-white rounded-md bg-gray-800 shadow-lg">
//       <div class="md:flex px-4 leading-none max-w-4xl">
//         <div class="flex-none ">
//          <img
//           src={`https://image.tmdb.org/t/p/w500/${filmInfo.poster_path}`} 
//           alt="pic"
//           class="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300 shadow-lg"
//         />           
//         </div>

//         <div class="flex-col text-gray-300">
 
//           <p class="pt-4 text-2xl font-bold">{filmInfo.title}</p>
//           <hr class="hr-text" data-content=""/>
//           <div class="text-md flex justify-between px-4 my-2">
//             <span class="font-bold">{filmInfo.runtime} min | {filmGenres.name[0]}, {filmGenres.name[1]}, {filmGenres.name[1]}</span>
//             <span class="font-bold"></span>
//           </div>
//           <p class="hidden md:block px-4 my-4 text-sm text-left">{filmO} </p>
          
//           <p class="flex text-md px-4 my-2">
//             Rating: 9.0/10 
//             <span class="font-bold px-2">|</span>
//             Mood: Dark
//           </p>
          
//           <div class="text-xs">
//             <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">TRAILER</button>
            
//             <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">IMDB</button>
            
//             <button type="button" class="border border-gray-400 text-gray-400 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-900 focus:outline-none focus:shadow-outline">AMAZON</button>
//           </div>

        
//         </div>
//       </div>
//       <div class="flex justify-between items-center px-4 mb-4 w-full">
//         <div class="flex">
//         <i class="material-icons mr-2 text-red-600">favorite_border</i>
//         <i class="material-icons text-blue-600">remove_red_eye</i>
//         </div>
//         <div class="flex">
//           <i class="material-icons ml-2 text-yellow-600">sentiment_very_satisfied</i>
//           <i class="material-icons ml-2 text-yellow-600">sentiment_neutral</i>
//           <i class="material-icons ml-2 text-yellow-600">sentiment_very_dissatisfied</i>
//            <i class="material-icons ml-2 text-yellow-600">star_outline</i>
//           <i class="material-icons ml-2 text-yellow-600">star_half</i>
//           <i class="material-icons ml-2 text-yellow-600">star</i>           
          
//         </div>
//       </div>          
//     </div>
//   </div>
  )
}
