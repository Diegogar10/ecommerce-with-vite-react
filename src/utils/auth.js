import React, { useEffect, useState } from "react";

export const Auth = () => {
  
  const [account, setAccount] = useState(false);
  const [dataAccount, setDataAccount] = useState({});
  
  useEffect(()=>{
    initialQuery();    
    
  },[])

  const initialQuery = () => {
    const LOCAL_KEY = 'APP_ECO_V1';
    const DATA_KEY = 'APP_ECODATA_V1';
    const state = getStateAuth(LOCAL_KEY);
    const data = getStateAuth(DATA_KEY);

    if(state) {
      setAccount(state=='true');
    } else {
      setStateAuth(LOCAL_KEY,account.toString());
    }

  }
      

  const getStateAuth = (LOCAL_KEY) => {
    return localStorage.getItem(LOCAL_KEY);
  }
  const setStateAuth = (LOCAL_KEY, data) => {
    localStorage.setItem(LOCAL_KEY, data);
  }

  return { account, dataAccount }
}