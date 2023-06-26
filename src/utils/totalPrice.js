export const totalPrice = (cart) => {
  if(cart.length > 0){
    return cart.map(product=>product.price).reduce((acc, val) => acc + val);
  }else {
    return 0;
  }
}