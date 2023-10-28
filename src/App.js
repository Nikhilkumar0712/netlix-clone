import React from "react";
import Body from "./Components/Body";
import store from "./redux/appStore";
import { Provider } from "react-redux";
const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Body />
      </Provider>
    </div>
  );
};

export default App;
