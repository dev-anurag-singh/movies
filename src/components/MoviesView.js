import FeedCard from './FeedCard';
import { useContext } from 'react';
import { Data } from './MyContext';

const MoviesView = a => {
  const data = useContext(Data);

  const moviesList = data.filter(el => {
    return el.category === 'Movie';
  });

  const moviesListLoader = () => {
    return moviesList.map(el => {
      return <FeedCard data={el} key={el.title} />;
    });
  };

  return (
    <div className='movie-page'>
      <section className='recommended-section'>
        <div className='container'>
          <h1 className='heading-large'>Movies</h1>
          <div className='feed'>{moviesListLoader()}</div>
        </div>
      </section>
    </div>
  );
};

export default MoviesView;
