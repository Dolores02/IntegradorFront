// Render de la vista categorías
export const renderCategories = () => {
    const ulList = document.getElementById("listFilter");
    // Creo los elementos
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>
    `;

    // Añado dinámicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement) => {
        liElement.addEventListener("click", () => {
            handleClick(liElement);
        });
    });

    // Verifico y manejo el estilo del elemento activo
    const handleClick = (elemento) => {
        liElements.forEach((el) => {
            el.classList.remove("liActive"); // Remover la clase de todos los elementos
        });
        elemento.classList.add("liActive"); // Agregar la clase solo al elemento clicado
    };
};
