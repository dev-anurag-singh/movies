import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App';
import ErrorPage from './components/Error';
import Home from './components/Home';
import MoviesView from './components/MoviesView';
import TvSeriesView from './components/TvSeriesView';
import BookmarkView from './components/BookmarkView';
import SearchView from './components/SearchView';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/movies',
        element: <MoviesView />,
      },
      {
        path: '/tv-series',
        element: <TvSeriesView />,
      },
      {
        path: '/bookmarks',
        element: <BookmarkView />,
      },
      {
        path: '/search',
        element: <SearchView />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
