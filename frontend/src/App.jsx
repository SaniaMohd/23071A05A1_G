import React, { useState, useEffect } from 'react';
import './App.css';
import BookmarkForm from './components/BookmarkForm';
import BookmarkList from './components/BookmarkList';
import BookmarkTable from './components/BookmarkTable';
import SearchBar from './components/SearchBar';
import ExportButton from './components/ExportButton';

const App = () => {
  const [bookmarks, setBookmarks] = useState(() => {
    const stored = localStorage.getItem('bookmarks');
    return stored ? JSON.parse(stored) : [];
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [view, setView] = useState('tiles'); // 'tiles' or 'table'

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const addBookmark = (bookmark) => {
    setBookmarks((prev) => [...prev, bookmark]);
  };

  const filteredBookmarks = bookmarks.filter((bookmark) => {
    const term = searchTerm.toLowerCase();
    return (
      bookmark.title.toLowerCase().includes(term) ||
      bookmark.url.toLowerCase().includes(term) ||
      bookmark.tags.some((tag) => tag.toLowerCase().includes(term))
    );
  });

  return (
    <div className="container">
      <h1>Bookmark Manager</h1>
      <BookmarkForm onAdd={addBookmark} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="view-toggle">
        <button onClick={() => setView('tiles')}>Tiles View</button>
        <button onClick={() => setView('table')}>Table View</button>
      </div>
      {view === 'tiles' ? (
        <BookmarkList bookmarks={filteredBookmarks} />
      ) : (
        <BookmarkTable bookmarks={filteredBookmarks} />
      )}
      <ExportButton bookmarks={bookmarks} />
    </div>
  );
};

const handleExport = () => {
    const dataStr = JSON.stringify(bookmarks, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bookmarks.json';
    a.click();
    URL.revokeObjectURL(url);
  };
  
export default App;
