import React from 'react';

const ExportButton = ({ bookmarks }) => {
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

  return <button onClick={handleExport}>Export Bookmarks</button>;
};

export default ExportButton;
