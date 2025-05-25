import React from 'react';

interface TrackCardProps {
  track: {
    name: string;
    image?: Array<{ '#text': string }>;
    artist: { name: string } | string;
    playcount?: string;
  };
}

const TrackCard: React.FC<TrackCardProps> = ({ track }) => {
  const getImageUrl = () => {
    if (!track.image || !Array.isArray(track.image)) {
      return 'https://via.placeholder.com/174x174?text=Нет+изображения';
    }

    for (let i = track.image.length - 1; i >= 0; i--) {
      if (track.image[i]['#text']) {
        return track.image[i]['#text'];
      }
    }
    return 'https://via.placeholder.com/174x174?text=Нет+изображения';
  };

  const artistName = typeof track.artist === 'string'
    ? track.artist
    : track.artist?.name;

  return (
    <div className="track-card">
      <img
        src={getImageUrl()}
        loading="lazy"
        alt={track.name}
        className="img-style-card"
      />
      <div className="track-info">
        <h3 className="name-style">{track.name}</h3>
        <p className="artist-name-style">Исполнитель: {artistName || 'Неизвестен'}</p>
        {track.playcount && <p className="listeners-style">Прослушиваний: {track.playcount}</p>}
      </div>
    </div>
  );
};

export default React.memo(TrackCard);