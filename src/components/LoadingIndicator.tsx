import React from 'react';

interface LoadingIndicatorProps {
  visible: boolean;
}

const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <div id="loading" className="loading-indicator">
      Загрузка...
    </div>
  );
};

export default React.memo(LoadingIndicator);