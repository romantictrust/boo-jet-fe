import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware, { END } from "redux-saga";
import sagaMonitor from "@redux-saga/simple-saga-monitor";
import localStorageMiddleware from "./middlewares/localStorageMiddleware";
import rootReducer from "./reducers";


const reHydrateStore = () => {
  const user = localStorage.getItem("user");
  if (user) {
    return { mainPage: { user: JSON.parse(user) } };
  }
  return undefined;
};

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  const persistedState = reHydrateStore();

  const store = createStore(
    rootReducer,
    persistedState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware, localStorageMiddleware, logger)
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept("./reducers", () => {
      const nextRootReducer = require("./reducers").default;
      store.replaceReducer(nextRootReducer);
    });
  }

  store.runSaga = sagaMiddleware.run;
  store.close = () => store.dispatch(END);
  return store;
}
