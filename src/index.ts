//EJEMPLO CAMBIAR COLOR DE FONDO

let boton = document.getElementById("boton");
let parrafo = document.querySelector("#parrafo");

const cambiarColor = () => {
  parrafo.classList.toggle("color-fondo-3");
};

boton.addEventListener("click", cambiarColor);

//---------------------------------------------------
//BOTON VER MAS
let botonMostrar = document.querySelector("#mostrar");
let texto = document.querySelector("#texto");

const mostrarTexto = () => {
  texto.classList.toggle("mostrar");
};

botonMostrar.addEventListener("click", mostrarTexto);

//------------------------------------------------------
//ASIGNAR EVENTOS A VARIOS BOTONES Y ENCONTRAR AL HERMANO
let botones = document.querySelectorAll(".botones");
console.log(botones);

for (let i: number = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function (e) {
    //busca el hermano inmediato
    let el = this.nextElementSibling;
    //toggle de clase del hermano
    el.classList.toggle("color-hermano");
  });
}

//--------------------------------------------------------
//lISTA DE TAREAS

let lista = document.getElementById("lista");
let tarea = document.getElementById("tarea");
let btnAgregar = document.getElementById("agregar");

const agregarTarea = () => {
  lista?.innerHTML += `<li> ${tarea.value}</li>`;
  tarea.value = "";
};

btnAgregar?.addEventListener("click", agregarTarea);
