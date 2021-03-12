import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { MainPage } from "./pages";
import { Provider } from "react-redux";
import store from "./configureStore";

function App() {
  return (
    <Router>
      <div>
        <Provider store={store}>
          <Route exact path="/" component={MainPage} />
        </Provider>
      </div>
    </Router>
  );
}

export default App;
