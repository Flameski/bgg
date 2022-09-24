import React from 'react';
import { Link } from 'react-router-dom';

interface GamesPageProps {}

const Games: React.FC<GamesPageProps> = (): React.ReactElement => {
  const random1 = '23423';
  const random2 = 'dasdkas';
  return (
    <>
      <div>Games</div>
      <p>Some example links:</p>
      <Link to={`/games/${random1}`}>rando 1</Link>
      <Link to={`/games/${random2}`}>rando 2</Link>
    </>
  );
};

export default Games;
