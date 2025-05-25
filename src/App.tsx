import React, { useState, useEffect } from 'react';
import lastFmApi from './services/api';
import SearchForm from './components/SearchForm';
import PopularSection from './components/PopularSection';
import SearchResults from './components/SearchResults';
import LoadingIndicator from './components/LoadingIndicator';
import ErrorMessage from './components/ErrorMessage';
import Footer from './components/Footer';
import './styles.css';

const App: React.FC = () => {
  const [topArtists, setTopArtists] = useState<any[]>([]);
  const [topTracks, setTopTracks] = useState<any[]>([]);
  const [searchResults, setSearchResults] = useState<{
    tracks: any[];
    artists: any[];
  }>({ tracks: [], artists: [] });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const [artistsData, tracksData] = await Promise.all([
          lastFmApi.getTopArtists(),
          lastFmApi.getTopTracks(),
        ]);
        setTopArtists(artistsData.artists.artist);
        setTopTracks(tracksData.tracks.track);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setShowSearchResults(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const [trackRes, artistRes] = await Promise.all([
        lastFmApi.searchTracks(query),
        lastFmApi.searchArtists(query),
      ]);

      const tracks = Array.isArray(trackRes.results.trackmatches.track)
        ? trackRes.results.trackmatches.track
        : trackRes.results.trackmatches.track
        ? [trackRes.results.trackmatches.track]
        : [];

      const artists = Array.isArray(artistRes.results.artistmatches.artist)
        ? artistRes.results.artistmatches.artist
        : artistRes.results.artistmatches.artist
        ? [artistRes.results.artistmatches.artist]
        : [];

      setSearchResults({ tracks, artists });
      setShowSearchResults(true);
    } catch (err:any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <div className="header-content">
          <h1>Last.fm</h1>
          <SearchForm onSearch={handleSearch} />
        </div>
      </header>

      <main>
        {!showSearchResults && (
          <>
            <PopularSection
              title="Популярные исполнители"
              items={topArtists}
              type="artists"
            />
            <PopularSection
              title="Популярные треки"
              items={topTracks}
              type="tracks"
            />
          </>
        )}

        {showSearchResults && <SearchResults results={searchResults} />}
      </main>

      <LoadingIndicator visible={isLoading} />
      <ErrorMessage message={error} />
      <Footer />
    </div>
  );
};

export default App;