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

const logInCustomer = async (req, res) => {
  const UserData = req.body;
  //   console.log(UserData);

  fs.readFile(CustomerDB, "utf-8", async (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      const customersInDB = JSON.parse(data);
      //   console.log(customersInDB);

      const existingUser = customersInDB.find(
        (user) => user.email === UserData.email
      );
      //   console.log("här!", existingUser);

      const match = await bcrypt.compare(
        UserData.password,
        existingUser.password
      );

      if (match) {
        delete existingUser.password;
        req.session = existingUser;
        res.status(201).json(req.session);
        console.log(req.session);
      } else {
        res.status(401).json("wrong password");
        console.log("wrong password");
      }
    }
  });
};

const logOutCustomer = async (req, res) => {
  req.session = null;
  res.status(201).json(req.session);
  console.log("signed out", req.session);
};

module.exports = { createCustomer, logInCustomer, logOutCustomer };
