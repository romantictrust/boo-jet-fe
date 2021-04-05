import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { MainPage, AuthPage, RegisterPage, NotFoundPage } from "./pages";
import { Provider } from "react-redux";
import configureStore from "./configureStore";
import rootSaga from "./sagas";

const store = configureStore(window.__INITIAL_STATE__);
store.runSaga(rootSaga);

function App() {
  const isAuthedUser = store.getState().mainPage.user.id;
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Switch>
            <Route path="/auth" component={AuthPage} />
            <Route path="/join" component={RegisterPage} />
            {isAuthedUser ? (
              <Route exact path="/" component={MainPage} />
            ) : (
              <Redirect to="/auth" />
            )}
            <Route path="*" component={NotFoundPage} />
          </Switch>
        </Provider>
      </div>
    </Router>
  );
}

export default App;
