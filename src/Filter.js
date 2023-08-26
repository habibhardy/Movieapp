import React from 'react';

const Filter = ({ titleFilter, ratingFilter, onTitleChange, onRatingChange }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by Title"
        value={titleFilter}
        onChange={onTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by Rating"
        value={ratingFilter}
        onChange={onRatingChange}
      />
    </div>
  );
};

export default Filter;