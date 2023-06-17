import React, { createContext, useState } from 'react';

const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
  const [count, setCount] = useState(0);

  return (
    <ShopContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </ShopContext.Provider>
  );
}
 
export {ShopContext , ShopContextProvider};