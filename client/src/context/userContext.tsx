import { createContext, PropsWithChildren, useState } from "react";

interface UserData {
  name: string;
  email: string;
  password: string;
}
interface IlogInData {
  email: string;
  password: string;
}
interface IUserContext {
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  setLogInData: React.Dispatch<React.SetStateAction<IlogInData>>;
  logInData: IlogInData;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
}

export const UserContext = createContext<IUserContext>({
  setUserData: () => {},
  userData: {
    name: "",
    email: "",
    password: "",
  },
  setLogInData: () => {},
  logInData: {
    email: "",
    password: "",
  },
  setIsLoggedIn: () => {},
  isLoggedIn: false,
});

// const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

const UserProvider = ({ children }: PropsWithChildren<{}>) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [logInData, setLogInData] = useState({
    email: "",
    password: "",
  });

  return (
    <UserContext.Provider
      value={{
        setUserData,
        userData,
        logInData,
        setLogInData,
        setIsLoggedIn,
        isLoggedIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
