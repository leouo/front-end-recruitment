import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import reducers from 'Reducers';
import {persistStore, autoRehydrate} from 'redux-persist';

const middlewares = [thunk];

export default function store (preloadedState) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const persistConfig = { whitelist: ['cart'] };
  const store = createStore(
    reducers,
    preloadedState,
    composeEnhancers(
      applyMiddleware(...middlewares),
      autoRehydrate()
    )
  );

  persistStore(store, persistConfig);

  return store;
}
