import * as actions from '../actions';
import R from 'ramda';

export default (state = { counter: 0 }, action) => {
  const newState = (update) => {
    return Object.assign({}, state, update);
  };

  switch (action.type) {
    case actions.INCREMENT:
      return newState({ counter: state.counter + 1 });
    case actions.DECREMENT:
      return newState({ counter: state.counter - 1 });
    case actions.POPULATE_TODOS:
      return newState({ todos: action.todos });
    case actions.REMOVE_TODO:
      const index = R.findIndex(R.propEq('_id', action.id), state.todos);
      return newState({
        todos: [
          ...state.todos.slice(0, index),
          ...state.todos.slice(index + 1)
        ]
      });
    default:
      return state;
  };
};
