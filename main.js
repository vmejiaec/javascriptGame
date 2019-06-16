'use strict';

function inicializar(){
    console.log('Inicio -inicializar-...');
    var eNombre = document.getElementById("nombre");
    var eCantidad = document.getElementById("cantidad");
    eNombre.value = "Por impares";
    eCantidad.value = "4";

    console.log('... Fin -inicializar-');
}

function ejecutar(){
    console.log('Inicio -ejecutar- ...');
    var x = 2;
    console.log('... Fin -ejecutar-');
}