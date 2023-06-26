import React, { useContext } from 'react';
import Layaout from '../container/Layaout';
import OrderCard from '../components/OrderCard';
import { ShopContext } from '../context/ShopContext';
import {ChevronLeftIcon} from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const MyOrder = () => {
  const { order } = useContext(ShopContext);
  const currentPath = window.location.pathname;
  const index = currentPath.substring(currentPath.lastIndexOf('/') + 1);

  const arrayProducts = () => {
    if(order.length > 0) {
      if(index === 'last'){
        return order.slice(-1)[0].products;
      }else {
        return order?.[index]?.products;
      }
    }else {
      return [];
    }
  }

  return ( 
    <Layaout>
      <div className='flex items-center justify-center w-80 mb-6 relative'>
        <Link to='/my-orders' className='absolute left-0'>
          <ChevronLeftIcon
            className='h-6 w-6 text-black cursor-pointer'
          /> 
        </Link>
        <h1>MyOrder</h1>
      </div>
      <div className='flex flex-col w-80'>
      {arrayProducts().map(product => <OrderCard
          key={product.id} 
          id={product.id} 
          title={product.title}
          price={product.price}
          imageUrl={product.images[0]}
        />)} 
      </div>
    </Layaout>
   );
}
 
export default MyOrder;