import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import createSagaMiddleware, { END } from "redux-saga";
import sagaMonitor from "@redux-saga/simple-saga-monitor";
import { USER_SIGN_IN } from "./pages/AuthPage/actions";
import rootReducer from "./reducers";

const localStorageMiddleware = ({ getState }) => {
  return (next) => (action) => {
    try {
      const result = next(action);
      if ([USER_SIGN_IN.SUCCESS].includes(result.type)) {
        localStorage.setItem("user", JSON.stringify(result.payload.user));
      }
      return result;
    } catch (e) {
      console.error(e);
    }
  };
};

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
