import Header from "./Header";
import { useEffect, useContext } from "react";
import { MyCartContext } from "../context/cartContext";
import "../Styles/home.css";
import Button from "@mui/material/Button";

interface IProduct {
  id: number;
  name: string;
  description: string;
  images: string[];
}

const Home = () => {
  const { products, setProducts, cartItems, setCartItems } =
    useContext(MyCartContext);

  useEffect(() => {
    async function ListOfProducts() {
      try {
        const response = await fetch("/api/getProducts", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          console.log(response);
          throw new Error("Failed to fetch products");
        }

        const productsData = await response.json();
        setProducts(productsData);
      } catch (error) {
        console.error("Error retrieving products:", error);
      }
    }

    ListOfProducts();
  }, []);

  const handleClick = (product: IProduct) => {
    // Check if the product is already in the cart
    const existingCartItem = cartItems.find(
      (item: any) => item.product.id === product.id
    );

    if (existingCartItem) {
      // If it exists, update the quantity
      const updatedCartItems = cartItems.map(
        (item: { product: { id: number }; quantity: number }) => {
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
              <Button variant="outlined" onClick={() => handleClick(product)}>
                lägg till i kundvagn
              </Button>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Home;
