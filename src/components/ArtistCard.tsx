import React from 'react';

interface ArtistCardProps {
  artist: {
    name: string;
    image?: Array<{ '#text': string }>;
    listeners?: string;
  };
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  const getImageUrl = () => {
    if (!artist.image || !Array.isArray(artist.image)) {
      return 'https://via.placeholder.com/174x174?text=Нет+изображения';
    }

    for (let i = artist.image.length - 1; i >= 0; i--) {
      if (artist.image[i]['#text']) {
        return artist.image[i]['#text'];
      }
    }
    return 'https://via.placeholder.com/174x174?text=Нет+изображения';
  };

  return (
    <div className="artist-card" data-artist={artist.name}>
      <img
        src={getImageUrl()}
        alt={artist.name}
        className="img-style-card"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://via.placeholder.com/174x174?text=Нет+изображения';
        }}
      />
      <h3 className="name-style">{artist.name}</h3>
      <p className="listeners-style">Слушателей: {artist.listeners || 'Нет данных'}</p>
    </div>
  );
};

export default React.memo(ArtistCard);