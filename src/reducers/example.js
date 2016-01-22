import { fromJS } from 'immutable';

const INCREASE = '@@demoApp/INCREASE';

const initialState = fromJS({ count: 0 });

export default function counter(state = initialState, action = {}) {
  switch (action.type) {
  case INCREASE:
    return state.updateIn(['count'], i => i + 1);

  default:
    return state;
  }
}

export function increase() {
  return { type: INCREASE };
}
