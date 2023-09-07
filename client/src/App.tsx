import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Confirmation from "./components/Confirmation";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
