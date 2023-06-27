import React from 'react';
import Layaout from '../container/Layaout';
import { Link } from 'react-router-dom';
const SignIn = () => {
  return (
    <Layaout>
      <div className='flex flex-col items-center w-80'>
        <h2 className='text-lg font-bold text-black mb-6'>Welcome</h2>
        <div className='flex flex-col items-start w-full'>
          <p className='mb-1 text-sm'>Email: <span></span></p>
          <p className='mb-1 text-sm'>Password: <span></span></p>
        </div>
        <button className='w-full bg-black py-3 text-white rounded-lg mb-6 mt-4'>
          Login
        </button>
        <Link className='text-sm underline cursor-pointer'>Forgot my password</Link>
        <button className='w-full bg-white py-3 text-black rounded-lg border border-black mt-4'>
          Sing Up
        </button>
      </div>
    </Layaout>
  );
}
 
export default SignIn;