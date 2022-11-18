import React, { useContext } from 'react';
import { AppContext } from '../stores/context';

interface HomepageProps {}

const Homepage: React.FC<HomepageProps> = (): React.ReactElement => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <>
      <h2>Homepage</h2>
      <p>Add stuff to the state: {state.counter}</p>
      <button onClick={() => dispatch({ type: 'ADD', payload: 1 })}>
        click
      </button>
      <button onClick={() => dispatch({ type: 'REMOVE' })}>clock</button>
    </>
  );
};

export default Homepage;
