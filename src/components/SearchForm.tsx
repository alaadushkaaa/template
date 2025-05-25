import React, { useState, FormEvent, useEffect } from 'react';

interface SearchFormProps {
  onSearch: (query: string) => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  useEffect(() => {
    if (query === '') {
      onSearch('');
    }
  }, [query, onSearch]);

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <div className="search-input-wrapper">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Поиск исполнителей..."
          required
        />
        <button type="submit" className="search-button">Найти</button>
      </div>
    </form>
  );
};

export default React.memo(SearchForm);