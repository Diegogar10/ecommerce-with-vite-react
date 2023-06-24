import React, { useEffect, useState } from 'react';
import Layaout from '../container/Layaout';
import Card from '../components/Card';
import ProductDetail from '../components/ProductDetail';

function Home () {
  const API_Url = 'https://api.escuelajs.co/api/v1/products';
  const [items, setItems] = useState([]);

  useEffect(()=>{
    fetch(API_Url)
      .then(response => response.json())
      .then(data=>setItems(data));
  },[]);

  return ( 
    <Layaout>
      Home
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        {
          items?.map((data)=>(
            <Card key={data.id} {...data}/>
          ))
        }
      </div>
      <ProductDetail />
    </Layaout>
   );
}

export default Home ;