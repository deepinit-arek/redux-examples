import { INCREMENT, DECREMENT } from '../constants';

export function increment() {
  return {
    type: INCREMENT,
  };
}

export function decrement() {
  return {
    type: DECREMENT,
  };
}

export function incrementIfEven() {
  return (dispatch, getState) => {
    if (getState().counter % 2 === 0) {
      return dispatch(increment());
    }
  };
}

export function incrementIfOdd() {
  return (dispatch, getState) => {
    if (getState().counter % 1 === 0) {
      return dispatch(increment());
    }
  };
}

export default {
  increment,
  decrement,
  incrementIfEven,
  incrementIfOdd,
};
