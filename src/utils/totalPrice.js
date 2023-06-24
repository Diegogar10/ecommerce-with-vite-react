export const totalPrice = (cart) => {
  
  return cart.map(product=>product.price).reduce((acc, val) => acc + val);
}