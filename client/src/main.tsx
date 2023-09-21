import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CartProvider from "./context/cartContext.tsx";
import UserProvider from "./context/userContext.tsx";
ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <CartProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </CartProvider>
  /* </React.StrictMode> */
);
