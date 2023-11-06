import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addTrendingTvShows } from '../utils/moviesSlice';
import { API_OPTIONS } from '../utils/constants';

const useTrendingTvShows = () => {
    const dispatch = useDispatch();

    const getTrendingTvShows = async () => {
        const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTIONS);
        const json = await data.json();
        dispatch(addTrendingTvShows(json.results));
    }

    useEffect(()=> {
        getTrendingTvShows();
    }, [])
}

export default useTrendingTvShows