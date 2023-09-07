import Header from "./Header";
import RegisterForm from "./RegisterForm";
import "../Styles/Cart.css";

const Cart = () => {
  const cart = [
    { product: "price_1Nn3QjJXDhsfJroG5CWKs0pB", quantity: 1 },
    { product: "price_1Nn3YfJXDhsfJroGB7MCENnY", quantity: 1 },
  ];

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
        <div>Varor i kundvagnen</div>
        <div>
          <RegisterForm />
        </div>
        Cart
        <button onClick={HandelPayment}>Gå till betalning</button>
      </div>
    </div>
  );
};

export default Cart;
