import React, { useContext } from 'react';
import {XMarkIcon} from '@heroicons/react/24/solid';
import { ShopContext } from '../context/ShopContext';
import { totalPrice } from '../utils/totalPrice';
import OrderCard from './OrderCard';
import './CheckoutSide.css';
import { Link } from 'react-router-dom';

const CheckoutSide = () => {
  const { openCheckout, setOpenCheckout, cart, order, setCart, setOrder } = useContext(ShopContext);
  
  const handleDelete = (id) => {
    const filteredProducts = cart.filter(product => product.id != id);
    setCart(filteredProducts);
  }

  const handleCheckout = () => {
    setOpenCheckout(false);
    const orderToAdd = {
      date: '01.02.23',
      products: cart,
      totalProducts: cart.length,
      totalPrice: totalPrice(cart)
    }
    setOrder([...order, orderToAdd])
    setCart([]);
  }

  return (
    <div>
      { openCheckout && 
        <aside className='checkout'>
          <div className='flex justify-between p-6 items-center'>
            <h2 className='font-medium text-xl'>My Order</h2>
            <div
              onClick={()=>setOpenCheckout(false)}
            ><XMarkIcon className='h-6 w-6 text-black cursor-pointer'/></div>
          </div>
          <div className='px-6 overflow-y-scroll flex-1'>
          {cart.map((product)=><OrderCard
            key={product.id} 
            id={product.id} 
            title={product.title}
            price={product.price}
            imageUrl={product.images[0]}
            handleDelete={handleDelete}
          />)}
          </div>
          <div className='px-6 mb-6'>
            <p className='flex justify-between items-center mb-2'>
              <span className='font-light'>Total:</span>
              <span className='font-medium text-lg'>${totalPrice(cart)}</span>
            </p>
            <Link to='/my-orders/last'> 
              <button
                className='w-full bg-black py-3 text-white rounded-lg'
                onClick={() => handleCheckout()}  
              >Checkoit</button>
            </Link>
          </div>
        </aside> 
      }
    </div>
  ) 
}
 
export default CheckoutSide;