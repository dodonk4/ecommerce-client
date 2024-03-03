const useCatchUserAndProducts = async () => {
    const initCatchUserAndProducts = async (user, setDataUser, setProducts, setLoading) => {
        try {
          const userResponse = await fetch(`${import.meta.env.VITE_REACT_APP_API}api/findUser`, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: user })
          });
          const userData = await userResponse.json();
          setDataUser(userData);
  
          const productsResponse = await fetch(`${import.meta.env.VITE_REACT_APP_API}api/products`);
          const productsData = await productsResponse.json();
          setProducts(productsData);
  
          setLoading(false);

        } catch (error) {
          console.error(error);
        }
    };

    return initCatchUserAndProducts;
}

export default useCatchUserAndProducts;
   
// let {initCatchUserAndProducts} = await useCatchUserAndProducts();

// await initCatchUserAndProducts("Hola", ", ¿cómo", " estás?");