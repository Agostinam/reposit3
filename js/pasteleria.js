class Postre {
   constructor(id, nombre, sabor, precio, imagen) {
     this.id = id;
     this.nombre = nombre;
     this.sabor = sabor;
     this.precio = precio;
     this.imagen = imagen;
   }
 }
 
 const Postre1 = new Postre(1, "Red Velvet", "Chocolate", 4500, "Redvelvet.jpg");
 const Postre2 = new Postre(2, "Cheese Cake", "Frutilla", 3000, "Cheesecake.jpg");
 const Postre3 = new Postre(3, "Brownie", "Chocolate", 2500, "Brownie.jpg");
 const Postre4 = new Postre(4, "Oreo Cake", "Oreo", 2500, "Oreocake.jpg");
 const Postre5 = new Postre(5, "Lemonpie", "Limón", 2800, "Lemonpie.jpg");
 const Postre6 = new Postre(6, "Tarta de frutilla", "Frutilla", 3000, "Frutillaycrema.jpg");
 const Postre7 = new Postre(7, "Carrot Cake", "Zanahoria", 3000, "Carrotcake.jpg");
 const Postre8 = new Postre(8, "Torta de Chocolate", "Chocolate", 3300, "Chocolatecake.jpg");
 const Postre9 = new Postre(9, "Chocotorta", "Chocolate", 3500, "Chocotorta.jpg");
 
 const catalogo = [Postre1, Postre2, Postre3, Postre4, Postre5, Postre6, Postre7, Postre8, Postre9];
 
 let postresdiv = document.getElementById("postres");
 
 function agregaralista(postre) {
   console.log("El postre ha sido agregado a la lista deseada:", postre);
 }
 
 function mostrarCatalogo(array) {
   postresdiv.innerHTML = ""; 
   localStorage.setItem("catalogo", JSON.stringify(catalogo));
 
   for (let postre of array) {
     let nuevopostrediv = document.createElement("div");
     nuevopostrediv.className = "col-12 col-md-6 col-lg-4 my-2 d-flex align-items-stretch";
     nuevopostrediv.innerHTML = `
       <div id="${postre.id}" class="card" style="width: 18rem;">
         <img class="card-img-top img-fluid" style="height: 200px;" src="../img/${postre.imagen}" alt="${postre.nombre} de ${postre.sabor}">
         <div class="card-body text-center">
           <h4 class="card-title">${postre.nombre}</h4>
           <p class="">Sabor: ${postre.sabor}</p>
           <p class="">Precio: ${postre.precio}</p>
           <button id="loquiero-${postre.id}" class="btn btn-dark w-100">¡Lo quiero!<i class="bi bi-heart-fill"></i></button>
         </div>
       </div>`;
 
     postresdiv.appendChild(nuevopostrediv);
 
     let botonloquiero = document.getElementById(`loquiero-${postre.id}`);
     botonloquiero.addEventListener("click", () => {
       agregaralista(postre);
     });
   }
 }
 
 mostrarCatalogo(catalogo);
 
 let selectorden = document.getElementById("selectorden");
 
 selectorden.addEventListener("change", () => {
   switch (selectorden.value) {
     case "1":
       ordenarmayormenor(catalogo);
       break;
     case "2":
       ordenarmenoramayor(catalogo);
       break;
     case "3":
       ordenaralfabeticamente(catalogo);
       break;
     case "4":
       ordenarsabor(catalogo);
       break;
     default:
       mostrarCatalogo(catalogo);
       break;
   }
 });
 
 function ordenarmenoramayor(array) {
   const menormayor = [...array];
   menormayor.sort((a, b) => a.precio - b.precio);
   mostrarCatalogo(menormayor);
 }
 
 function ordenarmayormenor(array) {
   const mayormenor = [...array];
   mayormenor.sort((a, b) => b.precio - a.precio);
   mostrarCatalogo(mayormenor);
 }
 
 function ordenaralfabeticamente(array) {
   const arrayalfabetico = [...array];
   arrayalfabetico.sort((a, b) => {
     if (a.nombre > b.nombre) {
       return 1;
     }
     if (a.nombre < b.nombre) {
       return -1;
     }
     return 0;
   });
   mostrarCatalogo(arrayalfabetico);
 }
 
 function ordenarsabor(array) {
   const arraysabor = [...array];
   arraysabor.sort((a, b) => {
     if (a.sabor > b.sabor) {
       return 1;
     }
     if (a.sabor < b.sabor) {
       return -1;
     }
     return 0;
   });
   mostrarCatalogo(arraysabor);
 }


 function enviarsugerencia() {
   const formulariosugerencia = document.getElementById('formulario-sugerencia');
   formulariosugerencia.addEventListener('submit', (e) => {
       e.preventDefault();

       const nombre = document.getElementById('inputnombre').value;
       const sugerencia = document.getElementById('inputsugerencia').value;

       const datossugerencia = {
           nombre: nombre,
           sugerencia: sugerencia
       };

       console.log('Datos de la sugerencia:', datossugerencia);

      

       formulariosugerencia.reset();
   });
}

document.addEventListener('DOMContentLoaded', () => {
   enviarsugerencia();
});

let modoOscuro = localStorage.getItem("modoOscuro");
console.log(modoOscuro);

if (modoOscuro === "true") {
  document.body.classList.add("dark-mode");
}

const lightModeToggle = document.getElementById("light-mode");
const darkModeToggle = document.getElementById("dark-mode");
const body = document.body;

lightModeToggle.addEventListener("click", function() {
  body.classList.remove("dark-mode");
  localStorage.setItem("modoOscuro", false);
});

darkModeToggle.addEventListener("click", function() {
  body.classList.add("dark-mode");
  localStorage.setItem("modoOscuro", true);
});

window.addEventListener("scroll", function() {
  const floatingDiv = document.querySelector(".floating-button");
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    floatingDiv.classList.add("floating-active");
  } else {
    floatingDiv.classList.remove("floating-active");
  }
});



 