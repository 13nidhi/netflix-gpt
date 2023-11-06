import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTrendingTvShows from '../hooks/useTrendingTvShows';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector((store)=> store.gpt.showGptSearch);

  //we will use custom hook here
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useTrendingTvShows();
 
  return (
    <div>
      <Header />
      { showGptSearch ? (      
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )
      }

      {/*
        Main container
          - videoBackground
          - videoTittle
        SecondaryContainer
          - MoviesList * n
            -> cards * n
          
  */}
    </div>
  )
}

export default Browse