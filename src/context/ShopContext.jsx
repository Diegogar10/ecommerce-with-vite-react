import React, { createContext, useState } from 'react';

const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
  const [count, setCount] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const [cart, setCart] = useState([]);

  return (
    <ShopContext.Provider value={{
      count,
      openDetail,
      openCheckout,
      dataDetail,
      cart,
      setCount,
      setOpenDetail,
      setOpenCheckout,
      setDataDetail,
      setCart
    }}>
      {children}
    </ShopContext.Provider>
  );
}
 
export {ShopContext , ShopContextProvider};