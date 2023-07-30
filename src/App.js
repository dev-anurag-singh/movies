import Navigation from './components/Navigation';
import { Outlet } from 'react-router-dom';
import SearchForm from './components/SearchForm';
import { BookmarksContext } from './components/MyContext';
import { useReducer } from 'react';
import BookmarkReducer from './components/BookmarkReducer';

const App = () => {
  const [bookmarks, dispatch] = useReducer(
    BookmarkReducer,
    localStorage.getItem('bookmarks')
      ? JSON.parse(localStorage.getItem('bookmarks'))
      : []
  );

  return (
    <div className='app'>
      <Navigation />
      <section className='search-section'>
        <SearchForm placeHolder='Search for movies or TV series' />
      </section>
      <BookmarksContext.Provider value={{ bookmarks, dispatch }}>
        <Outlet />
      </BookmarksContext.Provider>
    </div>
  );
};

export default App;
