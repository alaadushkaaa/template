import React from 'react';
import ArtistCard from './ArtistCard';
import TrackCard from './TrackCard';

interface PopularSectionProps {
  title: string;
  items: any[];
  type: 'artists' | 'tracks';
}

const PopularSection: React.FC<PopularSectionProps> = ({ title, items, type }) => {
  return (
    <section className="popular-section">
      <div className="popular-section-title-wrapper">
        <h2 className="popular-section-title">{title}</h2>
      </div>
      <div className={`${type}-grid mt-2`}>
        {items.map((item) =>
          type === 'artists' ? (
            <ArtistCard key={item.name} artist={item} />
          ) : (
            <TrackCard key={item.name} track={item} />
          )
        )}
      </div>
    </section>
  );
};

export default PopularSection;