import FeedCard from './FeedCard';
import { useContext } from 'react';
import { Data } from './MyContext';
import { BookmarksContext } from './MyContext';
import { ReactComponent as BookmarkEmptyIcon } from '../assets/icon-bookmark-empty.svg';

const BookmarkView = a => {
  const data = useContext(Data);
  const { bookmarks } = useContext(BookmarksContext);

  const bookmarksList = data.filter(el => {
    return bookmarks.includes(el.title);
  });

  const bookmarkedMoviesList = bookmarksList.filter(el => {
    return el.category === 'Movie';
  });

  const bookmarkedTvSeriesList = bookmarksList.filter(el => {
    return el.category === 'TV Series';
  });

  const moviesListLoader = () => {
    return bookmarkedMoviesList.map(el => {
      return <FeedCard data={el} key={el.title} />;
    });
  };

  const tvSeriesListLoader = () => {
    return bookmarkedTvSeriesList.map(el => {
      return <FeedCard data={el} key={el.title} />;
    });
  };

  if (!bookmarksList.length) {
    return (
      <div className='error-box'>
        <BookmarkEmptyIcon className='error__icon error__icon--bookmark' />
        <h4 className='error__message'>
          Looks like you have not bookmarked anything
        </h4>
      </div>
    );
  }

  return (
    <div className='bookmarks-page'>
      <section className='recommended-section'>
        {bookmarkedMoviesList.length ? (
          <div className='container'>
            <h1 className='heading-large'>Bookmarked Movies</h1>
            <div className='feed'>{moviesListLoader()}</div>
          </div>
        ) : (
          <></>
        )}
        {bookmarkedTvSeriesList.length ? (
          <div className='container margin-top-md'>
            <h1 className='heading-large'>Bookmarked Tv Series</h1>
            <div className='feed'>{tvSeriesListLoader()}</div>
          </div>
        ) : (
          <></>
        )}
      </section>
    </div>
  );
};

export default BookmarkView;
