import React, { useContext, PropsWithChildren, useReducer } from 'react';
import { Action, defaultState, reducer, State } from './reducer';

const AppContext = React.createContext<{
  state: State;
  dispatch: (value: Action) => void;
}>({ state: defaultState, dispatch: () => undefined });

const AppProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer<(state: State, action: Action) => State>(
    reducer,
    defaultState
  );

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useAppContext };
