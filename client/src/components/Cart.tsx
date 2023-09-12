import Header from "./Header";
import RegisterForm from "./RegisterForm";
import "../Styles/Cart.css";
import { MyCartContext } from "../context/cartContext";
import { useContext } from "react";

interface IProduct {
  product: any;
  name: string;
  description: string;
  images: string[];
}

const Cart = () => {
  const { cartItems } = useContext(MyCartContext);

  // const cart = [
  //   { product: "price_1Nn3QjJXDhsfJroG5CWKs0pB", quantity: 1 },
  //   { product: "price_1Nn3YfJXDhsfJroGB7MCENnY", quantity: 1 },
  // ];

  const cart = cartItems.map((item) => ({
    product: item.product.default_price,
    quantity: item.quantity,
  }));

  async function HandelPayment() {
    const response = await fetch(
      "http://localhost:3000/create-checkout-session",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cart),
      }
    );

    if (!response.ok) {
      return;
    }

    const { url } = await response.json();
    window.location = url;
  }

  return (
    <div>
      <Header />
      <div className="cart-container">
        <div className="products-container">
          <h2>Varor i kundvagn</h2>
          {cartItems.map((product: IProduct, i) => (
            <div key={i} className="product-card">
              <img src={`${product.product.images}`} alt="" />
              <h1>{product.product.name}</h1>
              <p>{product.product.description}</p>
              <p>Antal: {product.quantity}</p>
            </div>
          ))}
        </div>
        <div>
          <p>För att handla måste du vara inloggad</p>
          <button>Logga in</button>
        </div>
        <div>
          <RegisterForm />
        </div>

        <button onClick={HandelPayment}>Gå till betalning</button>
      </div>
    </div>
  );
};

export default Cart;
