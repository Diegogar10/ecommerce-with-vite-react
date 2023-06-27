import React, { useEffect, useState } from "react";

export const Auth = () => {
  
  const initialData = {
    name: 'none',
    user: 'none',
    password: 'none'
  };

  const [account, setAccount] = useState(false);
  const [dataAccount, setDataAccount] = useState(initialData);
  const DATA_KEY = 'APP_ECODATA_V1';
  const LOCAL_KEY = 'APP_ECO_V1';
  
  useEffect(()=>{
    initialQuery();    
    
  },[])

  const initialQuery = () => {
    const state = getStateAuth(LOCAL_KEY);
    const data = getStateAuth(DATA_KEY);


    if(data) {
      setDataAccount(JSON.parse(data));
    } else {
      if(state) {
        setAccount(state=='true');
      } else {
        setStateAuth(LOCAL_KEY,account.toString());
      }
      setStateAuth(DATA_KEY,JSON.stringify(dataAccount));
    }
  }
  
  const localCreateAccount = (data) => {
    setAccount(true);
    setDataAccount(data);
    setStateAuth(LOCAL_KEY,'true');
    setStateAuth(DATA_KEY,JSON.stringify(data));
  }

  const logout = () => {
    setAccount(false);
    setStateAuth(LOCAL_KEY,'false');
  }

  const login = () => {
    setAccount(true);
    setStateAuth(LOCAL_KEY,'true');
  }

  const getStateAuth = (LOCAL_KEY) => {
    return localStorage.getItem(LOCAL_KEY);
  }
  const setStateAuth = (LOCAL_KEY, data) => {
    localStorage.setItem(LOCAL_KEY, data);
  }

  return { account, dataAccount, localCreateAccount, logout, login }
}