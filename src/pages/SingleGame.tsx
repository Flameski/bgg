import React from 'react';
import { Link, useParams } from 'react-router-dom';

interface SingleGamePageProps {}

const SingleGame: React.FC<SingleGamePageProps> = (): React.ReactElement => {
  const { gameId } = useParams();
  return (
    <>
      <div>SingleGame</div>
      <div>Game ID: {gameId}</div>
      <Link to='/games'>Back to products</Link>
    </>
  );
};

export default SingleGame;
