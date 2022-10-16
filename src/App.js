import { CartProvider } from "./context/CartContext";

import { Provider } from "react-redux";
import { store } from "./store/store";

import AppRouter from "./routes/AppRouter";

import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <CartProvider>
        <AppRouter />
      </CartProvider>
    </Provider>
  );
};

export default App;
