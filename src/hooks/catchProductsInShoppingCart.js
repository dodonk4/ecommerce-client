const useCatchProductsInShoppingCart = () => {
    const initCatchProductsInShoppingCart = (dataUser, products, setProductsInShoppingCart, setCountOfProducts) => {
        // let total = 0;
        // dataUser.shoppingCart.forEach((cartItem) => {
        //   const [productName, quantity] = cartItem.split('-');
        //   const productMatched = products.find((product) => product.name === productName);
    
        //   if (productMatched) {
        //     total += productMatched.price.$numberDecimal * quantity;
        //   }
        // });
        // setTotalPrice(total);
        let count = 0;

        const productsInShoppingCart = dataUser.shoppingCart.map((cartItem) => {
            const [productName, quantity] = cartItem.split('-');
            const productMatched = products.find((product) => product.name === productName);

            if(productMatched){
                count++;
            }
        
            setCountOfProducts(count);

            return productMatched ? { ...productMatched, quantity } : null;
          }).filter(Boolean);

        setProductsInShoppingCart(productsInShoppingCart);
      }
    
    return initCatchProductsInShoppingCart
  
  }
    
  export default useCatchProductsInShoppingCart;