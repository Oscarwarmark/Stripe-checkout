const fs = require("fs");
const bcrypt = require("bcrypt");
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

  if (customer) {
    const newCustomer = {
      id: customer.id,
      name: customerData.name,
      email: customer.email,
      password: "",
    };

    const hashedPassword = await bcrypt.hash(customerData.password, 10);
    newCustomer.password = hashedPassword;
    console.log(newCustomer);

    fs.readFile(CustomerDB, "utf-8", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        const customers = JSON.parse(data);
        customers.push(newCustomer);

        fs.writeFile(CustomerDB, JSON.stringify(customers, null, 2), (err) => {
          if (err) {
            console.log(err.message);
          } else {
            console.log("New customers saved to DB");
          }
        });
      }
    });
  }
};

module.exports = { createCustomer };
