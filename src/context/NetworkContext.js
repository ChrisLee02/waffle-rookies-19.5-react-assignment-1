import { useContext, createContext, useState } from "react";

const networkContext = createContext();

export const NetworkContextProvider = ({ children }) => {

  const [token, setToken] = useState(localStorage.JWT);

  return (
    <networkContext.Provider
      value={{
        token,
        setToken
      }}
    >
      {children}
    </networkContext.Provider>
  );
};

export const useNetworkContext = () => useContext(networkContext);
