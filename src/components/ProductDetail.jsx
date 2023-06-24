import React, { useContext } from 'react';
import {XMarkIcon} from '@heroicons/react/24/solid';
import './ProductDetail.css';
import { ShopContext } from '../context/ShopContext';

const ProductDetail = () => {
  const { openDetail, setOpenDetail, dataDetail } = useContext(ShopContext);
  
  return (
    <div>
      { openDetail && 
        <aside className='product-detail'>
          <div className='flex justify-between p-6 items-center'>
            <h2 className='font-medium text-xl'>Detail</h2>
            <div
              onClick={()=>setOpenDetail(false)}
            ><XMarkIcon className='h-6 w-6 text-black cursor-pointer'/></div>
          </div>
          <figure className='px-6'>
            <img 
              className='w-full h-full rounded-lg' 
              src={dataDetail.images[0]} 
              alt={dataDetail.title} />
          </figure>
          <p className='flex flex-col p-6'>
            <span className='font-medium text-2xl mb-2'>${dataDetail.price}</span>
            <span className='font-medium text-md'>{dataDetail.title}</span>
            <span className='font-medium text-sm'>{dataDetail.description}</span>
          </p>
        </aside> 
      }
    </div>
  ) 
}
 
export default ProductDetail;