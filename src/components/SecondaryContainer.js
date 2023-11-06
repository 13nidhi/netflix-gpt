import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const movies = useSelector((store)=> store?.movies);
  //console.group("Now playing ",movies);
  //this is a secondayu container

  return (
    movies?.nowPlayingMovies && (
    <div className='bg-black'>
      <div className='-mt-52 pl-10 relative z-20'>
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies}/>
        <MovieList title={"Top rated"} movies={movies?.topRatedMovies}/>
        <MovieList title={"Popular"} movies={movies?.popularMovies}/>
        <MovieList title={"TV Shows"} movies={movies?.trendingTvShows}/>
        <MovieList title={"Up-coming"} movies={movies?.upComingMovies}/>
      </div>
    </div>


    )
  )
}

export default SecondaryContainer