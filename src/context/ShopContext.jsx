import React, { createContext, useState, useEffect } from 'react';

const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
  
  const API_Url = 'https://api.escuelajs.co/api/v1/products';
  
  const [count, setCount] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch(API_Url)
      .then(response => response.json())
      .then(data=>setItems(data));
  },[]);


  return (
    <ShopContext.Provider value={{
      count,
      openDetail,
      openCheckout,
      dataDetail,
      cart,
      order,
      items,
      setCount,
      setOpenDetail,
      setOpenCheckout,
      setDataDetail,
      setCart,
      setOrder
    }}>
      {children}
    </ShopContext.Provider>
  );
}
 
export {ShopContext , ShopContextProvider};