import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';

const Browse = () => {
  //we will use custom hook here
  useNowPlayingMovies();
  usePopularMovies();
 
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
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