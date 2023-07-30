import { ReactComponent as BrandLogo } from '../assets/logo.svg';
import { ReactComponent as HomeIcon } from '../assets/icon-nav-home.svg';
import { ReactComponent as MoviesIcon } from '../assets/icon-nav-movies.svg';
import { ReactComponent as TvSeriesIcon } from '../assets/icon-nav-tv-series.svg';
import { ReactComponent as BookMarksIcon } from '../assets/icon-nav-bookmark.svg';
import { NavLink, Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className='navigation'>
      <nav className='nav'>
        <div className='nav__logo-box'>
          <Link to='/' className='nav__logo-link'>
            <BrandLogo className='nav__logo' />
          </Link>
        </div>
        <div className='nav__items'>
          <NavLink to='/' className='nav__link'>
            <HomeIcon />
          </NavLink>
          <NavLink to='/movies' className='nav__link'>
            <MoviesIcon />
          </NavLink>
          <NavLink to='/tv-series' className='nav__link'>
            <TvSeriesIcon />
          </NavLink>
          <NavLink to='/bookmarks' className='nav__link'>
            <BookMarksIcon />
          </NavLink>
        </div>
        <div className='nav__profile'>
          <img
            src='./images\image-avatar.png'
            alt='profile pic'
            className='nav__avatar'
          />
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
