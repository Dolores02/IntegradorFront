//LOCAL STORAGE
export const handleGetProductLS = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if  (products) {
        return products;
    } else { 
        return [];
    }
};

//guardar en LOCAL STORAGE
//recibir prod

export const setInLS = (productIn) => { 
    //traer elementos
    let productInLocal = handleGetProductLS();
    const existingIndex = productInLocal.findIndex((productsLocal) => 
        productsLocal.id === productIn.id )
    
    //verificar existencia
    if (existingIndex != -1) {
    //si existe se reemplaza
        productInLocal[existingIndex] = productIn;
    } else {
    // si no existe se agrega
        productInLocal.push(productIn);
    }
    //setear el nuevo array 
    localStorage.setItem("products", JSON.stringify(productInLocal));
};