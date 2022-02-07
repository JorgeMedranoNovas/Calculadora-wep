const displayvalorAnterior = document.getElementById('valor-anterior');
const displayvaloractual = document.getElementById('valor-actual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores =  document.querySelectorAll('.operador');
const display = new Display(displayvalorAnterior,displayvaloractual);


botonesNumeros.forEach(boton =>{
boton.addEventListener('click',() => display.agregarNumero(boton.innerHTML));
});
botonesOperadores.forEach(boton =>{
    boton.addEventListener('click',() => display.computar(boton.value));
})
//boton.innerHTML
