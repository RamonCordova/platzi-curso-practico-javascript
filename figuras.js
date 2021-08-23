//código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado  + "cm");

function perimetroCuadrado(lado){
    return lado * 4;
}

// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
function areaCuadrado(ladoCuadrado){
    return ladoCuadrado * ladoCuadrado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cm^2" );
console.groupEnd();

console.group("Triángulos");
//código del cuadrado
// const ladoTrianguloUno = 6;
// const ladoTrianguloDos = 6;
// const baseTriangulo = 4;
// console.group("Cuadrados");
// console.log(
//     "Los lados del triángulo miden: " 
//     + ladoTrianguloUno  
//     + "cm, " 
//     + ladoTrianguloDos 
//     + "cm, " 
//     + baseTriangulo 
//     + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de : " + alturaTriangulo + "cm");

function perimetroTriangulo(ladoUno, ladoDos, base){
    return ladoUno + ladoDos + base;
}
// console.log("El perímetro del triángulo es de : " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura) / 2;
}
// console.log("El área del triángulo es de : " + areaTriangulo + "cm^2");

console.groupEnd();

//Código del círculo
console.group("Círculos");

// const radioCirculo = 4;
// console.log("El radio del círculo es de : " + radioCirculo + "cm");

function diametroCirculo(radio){
    return radio * 2;
}

// const diametroCirculo = radioCirculo * 2;
// console.log("El diámetro del círculo es de : " + diametroCirculo + "cm");

const PI = Math.PI;
// console.log("PI es : " + PI);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}
// console.log("El perímetro del círculo es de : " + perimetroCirculo + "cm");

function areaCirculo(radio){
    return (radio * radio) * PI
}
// console.log("El área del círculo es de : " + areaCirculo + "cm^2");
console.groupEnd();




//Aquí interactuamos con el HTML
function CalcularAreaCuadrada(){
    const value = document.getElementById("inputCuadrado").value;
    const perimetro = areaCuadrado(value);
    alert(perimetro);
}

function CalcularPerimetroCuadrado(){
    const value = document.getElementById("inputCuadrado").value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}