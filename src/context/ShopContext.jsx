import React, { createContext, useState, useEffect } from 'react';
import { Auth } from '../utils/auth';

const ShopContext = createContext();

const ShopContextProvider = ({children}) => {
  
  const API_Url = 'https://api.escuelajs.co/api/v1/products';
  
  const [count, setCount] = useState(0);
  const [openDetail, setOpenDetail] = useState(false);
  const [openCheckout, setOpenCheckout] = useState(false);
  const [dataDetail, setDataDetail] = useState({});
  const [cart, setCart] = useState([]);
  const [order, setOrder] = useState([]);
  const [search, setSearch ] = useState('')
  const [category, setCategory] = useState('');
  const [items, setItems] = useState([]);
  const [categoryItems, setCategoryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  
  const { account, dataAccount } = Auth();
  

  useEffect(()=>{
    fetch(API_Url)
      .then(response => response.json())
      .then(data=>setItems(data));
  },[]);

  

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
  }
  const filteredItemsByCategory = (items, searchByTitle) => {
    return items.filter(item => item.category.name.toLowerCase().includes(searchByTitle.toLowerCase()));
  }

  useEffect(()=>{
    if(category.length > 0) {
      setCategoryItems(filteredItemsByCategory(items, category))
    } else {
      setCategoryItems(items);
    }
    if(search.length > 0) {
      setFilteredItems(filteredItemsByTitle(categoryItems, search));
    } else {
      setFilteredItems(categoryItems);
    }
  },[items,categoryItems, search,category])

  
  return (
    <ShopContext.Provider value={{
      count,
      search,
      account, 
      dataAccount,
      openDetail,
      openCheckout,
      dataDetail,
      cart,
      category,
      order,
      items,
      filteredItems,
      setCount,
      setOpenDetail,
      setOpenCheckout,
      setDataDetail,
      setCart,
      setOrder,
      setSearch,
      setCategory,
    }}>
      {children}
    </ShopContext.Provider>
  );
}
 
export {ShopContext , ShopContextProvider};