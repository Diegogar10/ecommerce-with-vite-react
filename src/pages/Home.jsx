import React, { useContext, useEffect, useState } from 'react';
import Layaout from '../container/Layaout';
import Card from '../components/Card';
import ProductDetail from '../components/ProductDetail';
import { ShopContext } from '../context/ShopContext';

function Home () {
  const { filteredItems, search, setSearch, setCategory } = useContext(ShopContext);

  const currentPath = window.location.pathname;
  const index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  
  useEffect(()=>{
    setCategory(index);
  },[index]);
  

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  return ( 
    <Layaout>
      <div className='flex items-center justify-center w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
      <input 
        className='rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none'
        type='text' 
        placeholder='Search a product'
        value={search}
        onChange={(event)=>handleSearch(event)}
      />
      <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
        { (filteredItems.length === 0) && <p>No se encontraron productos!</p> }
        {  filteredItems?.map((data)=>(
            <Card key={data.id} {...data}/>
          ))
        }
      </div>
      <ProductDetail />
    </Layaout>
   );
}

export default Home ;