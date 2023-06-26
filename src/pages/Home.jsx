import React, { useContext } from 'react';
import Layaout from '../container/Layaout';
import Card from '../components/Card';
import ProductDetail from '../components/ProductDetail';
import { ShopContext } from '../context/ShopContext';

function Home () {

  const { items } = useContext(ShopContext);

  return ( 
    <Layaout>
      <div className='flex items-center justify-center w-80 mb-4'>
        <h1 className='font-medium text-xl'>Exclusive Products</h1>
      </div>
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