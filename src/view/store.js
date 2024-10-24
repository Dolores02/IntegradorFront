import { handleGetProductLS } from "../persistence/localStorage";

// STORE

export const handleGetProducts = () => {
    const products = handleGetProductLS();
    handleRenderList(products);
};


export const handleRenderList = (productosIn) => {
    const burgers = productosIn.filter((el) => el.categoria === "Hamburguesas");
    const papas = productosIn.filter((el) => el.categoria === "Papas");
    const gaseosas = productosIn.filter((el) => el.categoria === "Gaseosas");

    const renderProductGroup = (productos, title) => {
        console.log("Productos a renderizar:", productos);
        if (productos.length > 0) {
            const productosHTML = productos.map((producto, index) => {
                return `
                <div id=' product-${producto.categoria}-${index}'>
                    <div>
                        <img src='${producto.imagen} '/>
                    </div>
                    <div>
                        <h2>${producto.nombre}</h2>
                    </div>
                    <div>
                        <p><b>Precio:</b>$ ${producto.precio}</p>
                        <p><b>Categoría:</b> $ ${producto.categoria}</p>
                    </div>
                </div>
                `;
            });
            return `
            <section>
                <h3>${title}</h3>
                <div>
                    ${productosHTML.join("")}
                </div>
            </section>
            `;
        } else {
            return "";
        }
    };
    

    const appContainer = document.getElementById("storeContainer");
            
          
    appContainer.innerHTML =   `  
    ${renderProductGroup(burgers, "Hamburguesas")}
    ${renderProductGroup(papas, "Papas")}
    ${renderProductGroup(gaseosas, "Gaseosas")}
    `;

    const addEvents = (productosIn) => { 
        console.log(productosIn);
        if (productosIn) {
            productosIn.forEach((element,index) => {
                console.log(element);
                const productContainer = document.getElementById(`
                     product-${producto.categoria}-${index}
                    `);
                    console.log(productContainer);
                    productContainer.addEventListener('click', () => {
                        console.log("productoActivo", element)
                    });
            }); 
        }
      
    };
   addEvents(burgers);
};
