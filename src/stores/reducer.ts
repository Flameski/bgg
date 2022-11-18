export interface State {
  list: string[];
  counter: number;
  // [others: string]: any;
}

export type Action = { type: 'ADD'; payload: number } | { type: 'REMOVE' };

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD':
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case 'REMOVE':
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      break;
  }
  throw new Error('unknown action');
};

export const defaultState: State = {
  list: [],
  counter: 0,
};

// How to add stuff to the state:
// - State has to be strongly typed. I found no way around this
// -- it could be weakly typed and it will work, but TS will produce errors
// - Which means that both the State interface and the default object MUST know all possible properties from the start
// -- e.g. you can't dynamically add a 'name' property
// - we sorta can, actually
// - with an "index signature" [others: string]: any as a last property we can add all sorts of stuff dynamically
// -- however we won't have intellisence for them and they won't be dynamically typechecked
