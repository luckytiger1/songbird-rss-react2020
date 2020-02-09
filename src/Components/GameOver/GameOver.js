import React from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import './GameOver.scss';

export default function GameOver() {
  const { width, height } = useWindowSize();
  return (
    <div>
      <Confetti width={width - 50} height={height} />
      <iframe
        width="600"
        height="350"
        title="congratulations"
        src="https://www.youtube.com/embed/SC4xMk98Pdc"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
