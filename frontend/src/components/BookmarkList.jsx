import React from 'react';

const BookmarkList = ({ bookmarks }) => {
  return (
    <div className="bookmark-list">
      {bookmarks.map((bookmark) => (
        <div key={bookmark.id} className="bookmark-card">
          <h3>{bookmark.title}</h3>
          <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
            {bookmark.url}
          </a>
          <p>Tags: {bookmark.tags.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default BookmarkList;
