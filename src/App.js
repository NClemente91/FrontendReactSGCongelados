import { CartProvider } from "./context/CartContext";

// REDUX
// import { Provider } from "react-redux";
// import { store } from "./store/slices";

import AppRouter from "./routes/AppRouter";

import "./App.css";

const App = () => {
  return (
    // REDUX
    // <Provider store={store}>
    //   <AppRouter />
    // </Provider>

    // CONTEXT
    <CartProvider>
      <AppRouter />
    </CartProvider>
  );
};

export default App;
