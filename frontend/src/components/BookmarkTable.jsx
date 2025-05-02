import React from 'react';

const BookmarkTable = ({ bookmarks }) => {
  return (
    <table className="bookmark-table">
      <thead>
        <tr>
          <th>Title</th>
          <th>URL</th>
          <th>Tags</th>
        </tr>
      </thead>
      <tbody>
        {bookmarks.map((bookmark) => (
          <tr key={bookmark.id}>
            <td>{bookmark.title}</td>
            <td>
              <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
                {bookmark.url}
              </a>
            </td>
            <td>{bookmark.tags.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BookmarkTable;
