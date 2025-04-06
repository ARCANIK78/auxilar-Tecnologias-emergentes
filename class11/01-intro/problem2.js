document.writeln("<h1>problema 2</h1>")
document.writeln("<h1>Output</h1>")
let n1 = prompt("Ingrese 1");
let n2 = prompt("Ingrese 2");
n1 = Number(n1);
n2 = Number(n2)
residuo = n1 / n2;
cociente = n1 % n2;
console.log("El residuo: ",residuo, " y su cociente: ", cociente)
document.writeln("<h2>El cociente es: ",residuo," y el residuo es: ",cociente,"</h2>")
document.writeln("<h1>problema 3</h1>")
let vv = prompt("Ingrese valor de la Venta: ")
vv = Number(vv);
igv = vv * 0.19;
pv = vv + igv;
document.writeln("<h1>Output</h1>")
document.writeln("<h3>El IGV es: ",igv,"</h3>");
document.writeln("<h3>El pv es: ",pv,"</h3>");