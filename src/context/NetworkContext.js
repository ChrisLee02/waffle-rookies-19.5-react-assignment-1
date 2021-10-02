import { useContext, createContext, useState } from "react";

const networkContext = createContext();

export const NetworkContextProvider = ({ children }) => {
  const [isLogIn, setIsLogIn] = useState();

  const baseURL =
    "https://p04fpgjlo3.execute-api.ap-northeast-2.amazonaws.com/v1";
  const config = {
    headers: { Authorization: `Bearer ${localStorage.JWT}` },
  };

  return (
    <networkContext.Provider
      value={{
        isLogIn,
        setIsLogIn,
        baseURL,
        config,
      }}
    >
      {children}
    </networkContext.Provider>
  );
};

export const useNetworkContext = () => useContext(networkContext);
