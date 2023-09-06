const Home = () => {
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
      <button onClick={HandelPayment}>Ge mig pengar</button>
    </div>
  );
};

export default Home;
