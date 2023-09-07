require("dotenv").config();
const express = require("express");
const cors = require("cors");

const checkoutRoutes = require("./routes/checkout.route");
const productsRoutes = require("./routes/products.route");
const CLIENT_URL = "http://localhost:5173";
const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
  })
);
app.use(express.json());

app.use("/create-checkout-session", checkoutRoutes);
app.use("/getProducts", productsRoutes);

app.listen(3000, () => console.log("server is up and running"));
