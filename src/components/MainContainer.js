import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';


const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    //we are using this because without it at first load store was empty and it was throwing a error    
    // this is also known as early return
    if(!movies) return   //or we can use anything if(movies === null) return;

    const mainMovie = movies[0];
    //console.log(mainMovie);

    const {original_title, overview, id} = mainMovie;
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id}/>
       
    </div>

  )
}

export default MainContainer;