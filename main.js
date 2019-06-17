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

    var xo = 10;
    var yo = 30;
    
    var posini = [10,30];

    var bacteria = arrayBacteria();

    ctx.beginPath();
    
    trazarBacteria(bacteria, ctx, posini, 2);

    posini[0] += 15;

    trazarBacteria(bacteria, ctx, posini, 2);

    posini[0] += 15;

    trazarBacteria(bacteria, ctx, posini, 2);

    ctx.stroke();
}

function arrayBacteria(){
    var bacteria = [
        ["move",2,3],
        ["line",2,2],
        ["line",7,2],
        ["line",8,3],
        ["line",8,7],
        ["line",7,8],
        ["line",2,8],
        ["line",2,7],
        ["line",1,6],
        ["line",1,4],
        ["line",2,3],
        ["move",6.5,4],
        ["line",7,4.5],
        ["move",7,5.5],
        ["line",6.5,6],
        ["move",0,5],
        ["line",1,5]
    ];
    return bacteria;
}

function trazarBacteria(bacteria, ctx, posini , factor){
    for (var i=0 ; i<bacteria.length; i++){
        var tipo = bacteria[i][0];
        var xb = bacteria[i][1];
        var yb = bacteria[i][2];
        // factor de escala y posición inicial
        xb = factor*xb + posini[0];
        yb = factor*yb + posini[1];
        // dibuja el trazo
        if (tipo == "move")
            ctx.moveTo(xb,yb);
        if (tipo == "line")
            ctx.lineTo(xb,yb);
    }
}