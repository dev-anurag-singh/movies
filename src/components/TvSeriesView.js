import FeedCard from './FeedCard';
import { useContext } from 'react';
import { Data } from './MyContext';

const TvSeriesView = a => {
  const data = useContext(Data);

  const tvSeriesList = data.filter(el => {
    return el.category === 'TV Series';
  });

  const tvSeriesListLoader = () => {
    return tvSeriesList.map(el => {
      return <FeedCard data={el} key={el.title} />;
    });
  };

  return (
    <div className='tv-page'>
      <section className='recommended-section'>
        <div className='container'>
          <h1 className='heading-large'>Movies</h1>
          <div className='feed'>{tvSeriesListLoader()}</div>
        </div>
      </section>
    </div>
  );
};

export default TvSeriesView;
