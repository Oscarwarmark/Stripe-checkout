import { createContext, PropsWithChildren, useEffect, useState } from "react";

interface UserData {
  name: string;
  email: string;
  password: string;
}
interface IUserContext {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

export const UserContext = createContext<IUserContext>({
  setUserData: () => {},
  userData: {
    name: "",
    email: "",
    password: "",
  },
});

// const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const UserProvider = ({ children }: PropsWithChildren<{}>) => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  //   useEffect(() => {
  //     console.log(JSON.stringify(userData));
  //   }, [userData]);

  return (
    <UserContext.Provider
      value={{
        setUserData,
        userData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
