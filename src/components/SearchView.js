import FeedCard from './FeedCard';
import { useContext } from 'react';
import { Data } from './MyContext';
import { useSearchParams } from 'react-router-dom';

const SearchView = a => {
  const data = useContext(Data);

  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get('query');

  const searchList =
    searchQuery.length > 0
      ? data.filter(el =>
          el.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : data;

  const searchListLoader = () => {
    return searchList.map(el => {
      return <FeedCard data={el} key={el.title} />;
    });
  };

  return (
    <div className='movie-page'>
      <section className='recommended-section'>
        <div className='container'>
          <h1 className='heading-large'>
            Found {searchList.length} results for '{searchQuery}'
          </h1>
          <div className='feed'>{searchListLoader()}</div>
        </div>
      </section>
    </div>
  );
};

export default SearchView;
