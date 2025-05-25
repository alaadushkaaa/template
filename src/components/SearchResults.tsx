import React from 'react';
import ArtistCard from './ArtistCard';
import TrackCard from './TrackCard';

interface SearchResultsProps {
  results: {
    tracks: any[];
    artists: any[];
  };
}

const SearchResults: React.FC<SearchResultsProps> = ({ results }) => {
  return (
    <section className="search-results">
      <h2>Результаты поиска</h2>
      <div className="search-results-container">
        <section className="search-found-section">
          <h3 className="search-section-title">Найденные треки</h3>
          {results.tracks.length ? (
            <div className="tracks-grid">
              {results.tracks.map((track) => (
                <TrackCard key={`${track.name}-${track.artist}`} track={track} />
              ))}
            </div>
          ) : (
            <p>Треки не найдены.</p>
          )}
        </section>
        <section className="search-found-section">
          <h3 className="search-section-title">Найденные исполнители</h3>
          {results.artists.length ? (
            <div className="artists-grid">
              {results.artists.map((artist) => (
                <ArtistCard key={artist.name} artist={artist} />
              ))}
            </div>
          ) : (
            <p>Исполнители не найдены.</p>
          )}
        </section>
      </div>
    </section>
  );
};

export default SearchResults;