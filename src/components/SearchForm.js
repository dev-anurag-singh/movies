import { useEffect, useState } from 'react';
import { ReactComponent as SearchIcon } from '../assets/icon-search.svg';
import { useNavigate, useSearchParams } from 'react-router-dom';

const SearchForm = ({ placeHolder }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) setSearchQuery('');
    if (query) setSearchQuery(query);
  }, [query]);

  const onFormSubmit = e => {
    e.preventDefault();
    if (!searchQuery) return;
    navigate(`search?query=${searchQuery}`);
  };

  return (
    <form onSubmit={onFormSubmit} action='#' className='search-form'>
      <button type='submit' className='search-form__btn'>
        <SearchIcon />
      </button>
      <input
        className='search-form__input'
        placeholder={placeHolder}
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        required
      />
    </form>
  );
};

export default SearchForm;
