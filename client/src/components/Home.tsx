import Header from "./Header";
import { useEffect, useState, useContext } from "react";
import { MyCartContext } from "../context/cartContext";
import "../Styles/home.css";

interface IProduct {
  name: string;
  description: string;
  images: string[];
}

const Home = () => {
  const { products, setProducts, cartItems, setCartItems } =
    useContext(MyCartContext);

  // const [stripeProducts, setStripeProducts] = useState([]);

  useEffect(() => {
    async function ListOfProducts() {
      try {
        const response = await fetch("http://localhost:3000/api/getProducts", {
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
        setProducts(productsData);
      } catch (error) {
        console.error("Error retrieving products:", error);
      }
    }

    ListOfProducts();
  }, []);

  const handleClick = (product: any) => {
    // Check if the product is already in the cart
    const existingCartItem = cartItems.find(
      (item) => item.product.id === product.id
    );

    if (existingCartItem) {
      // If it exists, update the quantity
      const updatedCartItems = cartItems.map(
        (item: { product: number; quantity: number }) => {
          if (item.product.id === product.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        }
      );

      setCartItems(updatedCartItems);
    } else {
      // If it doesn't exist, add a new entry with quantity 1
      setCartItems([...cartItems, { product: product, quantity: 1 }]);
    }
  };

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  return (
    <div>
      <Header />
      <div>
        <div className="main-container">
          {products.map((product: IProduct, i) => (
            <div key={i} className="product-card">
              <img src={`${product.images}`} alt="" />
              <h1>{product.name}</h1>
              <p>{product.description}</p>
              <button onClick={() => handleClick(product)}>
                lägg till i kundvagn
              </button>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
