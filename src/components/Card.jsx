import React, { useContext } from 'react';
import {CheckIcon, PlusIcon} from '@heroicons/react/24/solid';
import { ShopContext } from '../context/ShopContext';

const Card = (data) => {
  const {id, category, images, title, price} = data;
  const { cart ,count, setCount, setOpenDetail, setOpenCheckout, setDataDetail, setCart } = useContext(ShopContext);
  
  const showProduct = () => {
    setOpenDetail(true);
    setDataDetail(data);
  }

  const addToCart = (event) => {
    event.stopPropagation();
    setOpenDetail(false);
    const newCart = [...cart]
    newCart.push(data);
    setCount(count+1)
    setCart(newCart);
    setOpenCheckout(true);
  }

  const renderIcon = (id) => {
    const isInCart = cart.filter(product => product.id === id).length > 0;
    if(isInCart) {
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6  rounded-full m-2 p-1'
        >
          <CheckIcon 
            className='h-6 w-6 text-white'/>
        </div>
      )
    } else {
      return (
        <div 
          className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6  rounded-full m-2 p-1'
          onClick={(event)=>addToCart(event)}
        >
          <PlusIcon 
            className='h-6 w-6 text-black'/>
        </div>
      )
    }
  }
  
  return (
    <div 
      className='bg-white cursor-pointer w-56 h-60'
      onClick={()=>showProduct()}
      >
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>{category.name}</span>
        <img  className='w-full h-full object-cover rounded-lg' src={images[0]} alt={title} />
        {renderIcon(id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-sm font-light'>{title}</span>
        <span className='text-sm font-medium'>${price}</span>
      </p>
    </div>
  );
}
 
export default Card;