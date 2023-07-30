import FeedCard from './FeedCard';
import { useContext } from 'react';
import { Data } from './MyContext';

const Home = a => {
  const data = useContext(Data);

  const trendingData = data.filter(el => {
    return el.isTrending;
  });

  const trendingSectionLoader = () => {
    return trendingData.map(el => {
      return <FeedCard data={el} key={el.title} />;
    });
  };

  const recommendedSectionLoader = () => {
    return data.map(el => {
      return <FeedCard data={el} key={el.title} />;
    });
  };

  return (
    <div className='home'>
      <section className='trending-section'>
        <h1 className='heading-large'>Trending</h1>
        <div className='trending-feed'>{trendingSectionLoader()}</div>
      </section>
      <section className='recommended-section'>
        <div className='container'>
          <h1 className='heading-large'>Recommended for you</h1>
          <div className='feed'>{recommendedSectionLoader()}</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
