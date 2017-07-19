import * as actions from '../actions';

const newState = (update) => {
  return Object.assign({}, state, update);
};

export default (state = { counter: 0 }, action) => {
  switch (action.type) {
    case actions.INCREMENT:
      return { counter: state.counter + 1 }
    case actions.DECREMENT:
      return { counter: state.counter - 1 }
    default:
      return state
  }
};
