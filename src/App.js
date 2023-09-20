import "./App.css";

import { Provider } from "react-redux";
import store from "./store";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Cart from "./screens/Cart";
import OrderScreen from "./screens/OrderScreen";
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderScreen />} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
