import React, { useState } from 'react';

const BookmarkForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !url) return;
    const newBookmark = {
      id: Date.now(),
      title,
      url,
      tags: tags.split(',').map((tag) => tag.trim()),
    };
    onAdd(newBookmark);
    setTitle('');
    setUrl('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit} className="bookmark-form">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit">Add Bookmark</button>
    </form>
  );
};

export default BookmarkForm;
