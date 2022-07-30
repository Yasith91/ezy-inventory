import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import Routes from "./app/router/routes";
import store from "./app/store";

function App() {
  return (
    /* Provide Redux store */
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
