import {
  createStore,
  applyMiddleware,
  compose,
  combineReducers,
} from 'redux';

import thunk from 'redux-thunk';
import reducers from '../reducers';
import logger from './logger';

function configureStore(initialState) {
  const store = compose(
    applyMiddleware(
      thunk,
      logger,
    ),
  )(createStore)(combineReducers(reducers), initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
