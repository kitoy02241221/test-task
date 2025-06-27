import { useState } from 'react';
import Card from './Card';
import Product from './Product';
import RatingFilter from './filter';

function StateBlock() {
  const [selectedGenre, setSelectedGenre] = useState('Все');
  const [ratingFilter, setRatingFilter] = useState('Все');
  const [selectedPlatform, setSelectedPlatform] = useState('Все');

  const productGenres = Array.from(new Set(
    Product.flatMap(item => item.genre)
  ));
  const allGenres = ['Все', ...productGenres];



  const fixedPlatforms = ['Все', 'PC', 'Mac', 'PlayStation', 'Xbox'];

  const filterByGenre = (item) => {
    if (selectedGenre === 'Все') return true;
    return item.genre.includes(selectedGenre);
  };



  const filterByRating = (item) => {
    if (ratingFilter === 'Все') return true;
    if (ratingFilter === 'Менее 8') return item.rating < 8;
    if (ratingFilter === 'Более 8') return item.rating >= 8;
    return true;
  };

  const filterByPlatform = (item) => {
    if (selectedPlatform === 'Все') return true;

    const platformNorms = Array.isArray(item.platform)
      ? item.platform.map(p => p.toLowerCase())
      : [item.platform.toLowerCase()];

    if (selectedPlatform === 'PC') {
      return platformNorms.some(p => p.includes('pc') || p.includes('пк'));
    }
    if (selectedPlatform === 'Mac') {
      return platformNorms.some(p => p.includes('mac') || p.includes('мак'));
    }
    if (selectedPlatform === 'PlayStation') {
      return platformNorms.some(p =>
        p.includes('ps') ||
        p.includes('пс') ||
        p.includes('playstation') ||
        p.includes('плейстейшн')
      );
    }
    if (selectedPlatform === 'Xbox') {
      return platformNorms.some(p => p.includes('xbox') || p.includes('иксбокс'));
    }
    return false;
  };

  const filteredProducts = Product.filter(item =>
    filterByGenre(item) && filterByRating(item) && filterByPlatform(item)
  );

  return (
    <>
      <div className="filter">
        <label>Жанр: </label>
        <select value={selectedGenre} onChange={(e) => setSelectedGenre(e.target.value)}>
          {allGenres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
      </div>

      <RatingFilter ratingFilter={ratingFilter}  setRatingFilter={setRatingFilter} className="filter" />

      <div className="filter">
        <label>Платформа: </label>
        <select value={selectedPlatform} onChange={(e) => setSelectedPlatform(e.target.value)}>
          {fixedPlatforms.map((platform, index) => (
            <option key={index} value={platform}>{platform}</option>
          ))}
        </select>
      </div>

      <div className='Card'>
        {filteredProducts.map(item => (
          <div key={item.id}>
            <Card product={item} />
          </div>
        ))}
      </div>
      <div className='decoration'>
      </div>
      <div className='decoration'>
      </div>

    </>
  );
}

export default StateBlock;