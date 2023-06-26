import React, { useContext } from 'react';
import Layaout from '../container/Layaout';
import OrdersCard from '../components/OrdersCard';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const MyOrders = () => {
  const { order } = useContext(ShopContext);
  return (
    <Layaout>
      <div className='flex items-center justify-center w-80 mb-4'>
        <h1 className='font-medium text-xl'>MyOrders</h1>
      </div>
      {order.map((order,index)=>
        <Link to={`/my-orders/${index}`}>
          <OrdersCard 
            key={index}
            totalPrice={order.totalPrice}
            totalProducts={order.totalProducts}
          />
        </Link>
      )}
    </Layaout> 
  );
}
 
export default MyOrders;