import Header from "./Header";
import { useEffect, useState } from "react";
import "../Styles/home.css";

const Home = () => {
  const [stripeProducts, setStripeProducts] = useState([]);

  useEffect(() => {
    async function ListOfProducts() {
      try {
        const response = await fetch("http://localhost:3000/getProducts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const productsData = await response.json();
        console.log(productsData);
        setStripeProducts(productsData);
      } catch (error) {
        console.error("Error retrieving products:", error);
      }
    }

    ListOfProducts();
  }, []);
  return (
    <div>
      <Header />
      <div>
        <div className="main-container">
          {stripeProducts.map((product, i) => (
            <div key={i} className="product-card">
              <img src={`${product.images}`} alt="" />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <button>lägg till i kundvagn</button>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
