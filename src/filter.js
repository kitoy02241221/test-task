import React from 'react';

function RatingFilter({ ratingFilter, setRatingFilter }) {
  return (
    <div className="filter">
      <label>Рейтинг: </label>
      <select value={ratingFilter} onChange={(e) => setRatingFilter(e.target.value)}>
        <option value="Все">Все</option>
        <option value="Менее 8">Менее 8</option>
        <option value="Более 8">Более 8</option>
      </select>
    </div>
  );
}

export default RatingFilter;