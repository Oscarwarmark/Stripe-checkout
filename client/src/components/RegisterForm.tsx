import { UserContext } from "../context/userContext";
import { useContext } from "react";

const RegisterForm = () => {
  const { userData, setUserData } = useContext(UserContext);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUserData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/createCustomer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
  };

  return (
    <>
      <p>Eller registrera dig nedan</p>
      <form className="form-container" onSubmit={handleSubmit}>
        <input
          placeholder="namn"
          type="text"
          name="name"
          onChange={handleChange}
        />
        <input
          placeholder="Email"
          type="text"
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="lösenord"
          type="text"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">register</button>
      </form>
    </>
  );
};

export default RegisterForm;
