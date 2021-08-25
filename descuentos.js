// const precioOriginal = 120;
// const descuento = 18;


function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}


function PriceDiscount(){
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;
    const inputPriceDiscount = document.getElementById("inputDiscount");
    const priceDiscount = inputPriceDiscount.value;
    
    const precioConDesuento = calcularPrecioConDescuento(priceValue, priceDiscount);
    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento son: $" + precioConDesuento;
}




// console.log({
//     precioOriginal, descuento, porcentajePrecioConDescuento, precioConDescuento
// });