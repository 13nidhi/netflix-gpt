import { useEffect } from 'react';
import {useDispatch} from "react-redux";
import { API_OPTIONS } from '../utils/constants';
import {nowPlayingMovies} from "../utils/moviesSlice";

const useNowPlayingMovies = () => {
    //Fetch data from TMDB Api and update the store 
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
      const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
      const json = await data.json();
      console.log(json.results);
      dispatch(nowPlayingMovies(json.results));
    }
    
    useEffect(()=> {
      getNowPlayingMovies();
    }, [])
}

export default useNowPlayingMovies;

