import React, { useContext, useRef, useState } from 'react';
import Layaout from '../container/Layaout';
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
const SignIn = () => {
  const [screen, setScreen] = useState(false);
  const { dataAccount, localCreateAccount, login } = useContext(ShopContext);
  const renderCondition = dataAccount.user === 'none';
  const form = useRef(null);


  const createAccount = () => {
    const formData = new FormData(form.current);
    const data = {
      name: formData.get('name'),
      user: formData.get('email'),
      password: formData.get('password')
    }

    localCreateAccount(data);
  }

  return (
    <Layaout>
      {!screen &&
      <div className='flex flex-col items-center w-80'>
        <h2 className='text-lg font-bold text-black mb-6'>Welcome</h2>
        <div className='flex flex-col items-start w-full'>
          <p className='mb-1 text-sm'>Email: <span>{renderCondition && '' || dataAccount.user }</span></p>
          <p className='mb-1 text-sm'>Password: <span>{renderCondition && '' || dataAccount.password }</span></p>
        </div>
        <Link to='/'>
          <button 
            className='w-80 bg-black py-3 text-white rounded-lg mb-6 mt-4 disabled:bg-slate-500'
            onClick={()=> login()}   
            disabled={renderCondition} 
          >
            Login
          </button>
        </Link>
        <Link className='text-sm underline cursor-pointer'>Forgot my password</Link>
        <button 
          className='w-full bg-white py-3 text-black rounded-lg border border-black mt-4'
          disabled={!renderCondition}
          onClick={() => setScreen(true)}   
        >
          Sing Up
        </button>
      </div>
      ||
      <form ref={form} className='flex flex-col items-center w-80'>
        <h2 className='text-lg font-bold text-black mb-6'>Welcome</h2>
        <div className='flex flex-col justify-start w-full'>
          <label htmlFor="name">Your name:</label>
          <input className='mb-3 mt-1 border border-black rounded-lg p-2 w-full' type="text" name='name' id='name' placeholder='peter'/>
        </div>
        <div className='flex flex-col justify-start w-full'>
          <label htmlFor="email">Your email:</label>
          <input className='mb-3 mt-1 border border-black rounded-lg p-2 w-full' type="text" name='email' id='email' placeholder='df@gmail.com'/>
        </div>
        <div className='flex flex-col justify-start w-full'>
          <label htmlFor="password">Your password:</label>
          <input className='mb-3 mt-1 border border-black rounded-lg p-2 w-full' type="password" name='password' id='password' placeholder='****'/>
        </div>
        <Link to='/'>
          <button 
            className='w-80 bg-black py-3 text-white rounded-lg mb-6 mt-4 disabled:bg-slate-500'  
            onClick={()=>createAccount()}  
          >
            Create
          </button>
        </Link>
      </form>
      }
    </Layaout>
  );
}
 
export default SignIn;