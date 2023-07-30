const BookmarkReducer = (bookmarks, action) => {
  switch (action.type) {
    case 'added': {
      const newBookmarks = [...bookmarks, action.payload];

      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      return [...newBookmarks];
    }
    case 'remove': {
      const newBookmarks = bookmarks.filter(el => {
        return el !== action.payload;
      });

      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks));
      return [...newBookmarks];
    }
    default: {
      return [...bookmarks];
    }
  }
};

export default BookmarkReducer;
