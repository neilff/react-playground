import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';

import thunk from 'redux-thunk';
import history from './history';
import routes from './routes';
import logger from './logger';
import rootReducer from '../reducers';

function configureStore(initialState) {
  const store = compose(
    applyMiddleware(
      thunk,
      logger,
    ),
    reduxReactRouter({
      routes,
      history,
    }),
  )(createStore)(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers');
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}

export default configureStore;
