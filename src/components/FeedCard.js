import { ReactComponent as BookmarkFullIcon } from '../assets/icon-bookmark-full.svg';
import { ReactComponent as BookmarkEmptyIcon } from '../assets/icon-bookmark-empty.svg';
import { ReactComponent as CategoryMovieIcon } from '../assets/icon-category-movie.svg';
import { ReactComponent as CategoryTvIcon } from '../assets/icon-category-tv.svg';
import { useContext } from 'react';
import { BookmarksContext } from './MyContext';

const FeedCard = ({ data }) => {
  const { bookmarks, dispatch } = useContext(BookmarksContext);

  let isBookmarked = false;

  if (bookmarks.includes(data.title)) {
    isBookmarked = true;
  }

  const onBookmarkIconClick = title => {
    if (isBookmarked) {
      dispatch({
        type: 'remove',
        payload: title,
      });
    } else {
      dispatch({
        type: 'added',
        payload: title,
      });
    }
  };

  let imageToUse;

  if (data.isTrending) {
    imageToUse = data.thumbnail.trending.large;
  } else {
    imageToUse = data.thumbnail.regular.large;
  }

  return (
    <div className='feed-card'>
      <div
        className='feed-card__image'
        style={{
          backgroundImage: `url(${imageToUse})`,
        }}
      ></div>
      <div
        onClick={() => onBookmarkIconClick(data.title)}
        className='feed-card__bookmark-btn'
      >
        {isBookmarked ? <BookmarkFullIcon /> : <BookmarkEmptyIcon />}
      </div>
      <div className='feed-card__info-box'>
        <div className='ds-flex gap-8'>
          <span className='feed-card__year'>{data.year}</span>
          <span className='dot'></span>
          <span className='feed-card__category'>
            {data.category === 'Movie' ? (
              <CategoryMovieIcon />
            ) : (
              <CategoryTvIcon />
            )}
            <span>{data.category}</span>
          </span>
          <span className='dot'></span>
          <span className='feed-card__rating'>{data.rating}</span>
        </div>
        <span className='feed-card__title'>{data.title}</span>
      </div>
    </div>
  );
};

export default FeedCard;
