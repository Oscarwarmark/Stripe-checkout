const fs = require("fs");
const { initStripe } = require("../stripe");
const stripe = initStripe();
const CustomerDB = "./db/customerDB.json";

const createCustomer = async (req, res) => {
  const customerData = req.body;
  const customer = await stripe.customers.create({
    description: "Customer created from register form",
    name: customerData.name,
    email: customerData.email,
  });

  console.log("HÄR!!!", customer);
  console.log(customerData);

  if (customer) {
    const newCustomer = {
      id: customer.id,
      name: customerData.name,
      email: customer.email,
      password: "",
    };
  }
};

module.exports = { createCustomer };
