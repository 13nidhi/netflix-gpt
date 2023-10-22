import { useEffect } from 'react';
import { API_OPTIONS } from '../utils/constants';
import { useDispatch,} from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async() => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        //console.log(json);
        
        const filterdata = json.results.filter((video)=> {
          return video.type === "Trailer"
        } )
    
        //if not any filter data then , we will fetch first videos from results 
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
        //setTrailerId(trailer.key);
        dispatch(addTrailerVideo(trailer)); 
         console.log(trailer);
      }
    
      useEffect(()=> {
        getMovieVideos();
      },[])
}

export default useMovieTrailer;