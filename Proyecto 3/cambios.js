const fondo = document.querySelector("body");
const boton = document.querySelector("#cambio");
const color = document.querySelector("#color");

boton.addEventListener("click", () =>{

const colores=['red', 'white','green', 'pink', 'blue', 'aqua', 'blueviolet', 'gold', 'greenyellow', 'grey','black'];
const seleccion = parseInt(Math.random()*colores.length);
fondo.style.backgroundColor = colores[seleccion];
color.textContent = colores[seleccion];
});