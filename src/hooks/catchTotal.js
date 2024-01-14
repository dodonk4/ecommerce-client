const useCatchTotal = () => {
  const initCatchTotal = (dataUser, products, setTotalPrice) => {
      let total = 0;
      dataUser.shoppingCart.forEach((cartItem) => {
        const [productName, quantity] = cartItem.split('-');
        const productMatched = products.find((product) => product.name === productName);
  
        if (productMatched) {
          total += productMatched.price.$numberDecimal * quantity;
        }
      });
      setTotalPrice(total);
    }
  
  return initCatchTotal

}
  

export default useCatchTotal;