import { renderCategories } from "./src/categories";
import { setInLS } from "./src/persistence/localStorage";
import { handleGetProducts } from "./src/view/store";

import "./style.css";
document.addEventListener("DOMContentLoaded", () => {
    handleGetProducts();
    renderCategories();
});


/* POP UP  */
const buttonAdd = document.getElementById("buttonAddElement");
buttonAdd.addEventListener('click', () => {
    openModal();  //lo abre
});

const buttonCancel = document.getElementById("cancelButton");
buttonCancel.addEventListener('click', () => {
    handleCancelButton();
});
const handleCancelButton = () => {
    closeModal();
};


//FUNCIONES ABRIR Y CERRAR
const openModal = () => {
   const modal = document.getElementById("modalPopUp");  //busca el pop up container
   modal.style.display = 'flex';
};

const closeModal = () => {
    const modal = document.getElementById("modalPopUp");  //busca el pop up container
    modal.style.display = 'none';
 };
 
 //GUARDAR O MODIFICAR ELEMENTOS
 const buttonAccept = document.getElementById("acceptButton" );
buttonAccept.addEventListener('click', () => {
    handleSaveOrModifyElement();
});



 const handleSaveOrModifyElement = ( ) => {
    const nombre = document.getElementById("nombreProd").value,
     imagen = document.getElementById("imagenProd").value,
     precio = document.getElementById("precioProd").value,
     categoria = document.getElementById("categoriaProd").value;

   let object  = {
    id :  new Date().toISOString(),
    nombre,
    imagen,
    precio,
    categoria,
    };
    setInLS(object);
    handleGetProducts();
    closeModal();   //cierro
};
 
