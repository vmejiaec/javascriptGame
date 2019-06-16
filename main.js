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
    
    dibujaPuntos();


    console.log('... Fin -ejecutar-');
}

function dibujaPuntos(){
    //detecta el canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    // captura las dimensiones del canvas
    var width = canvas.width;
    var height = canvas.height;
    // dibuja un rectangulo
    ctx.strokeStyle = "red";
    ctx.strokeRect(10,20,2,2);

}