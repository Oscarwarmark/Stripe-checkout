const { initStripe } = require("../stripe");
const stripe = initStripe();

const CLIENT_URL = "http://localhost:5173";

const getProducts = async (req, res) => {
  try {
    const products = await stripe.products.list({
      limit: 3,
    });

    res.status(200).json(products.data);
    console.log(products.data);
  } catch (error) {
    console.error("Error retrieving products:", error);
  }
};

module.exports = { getProducts };
