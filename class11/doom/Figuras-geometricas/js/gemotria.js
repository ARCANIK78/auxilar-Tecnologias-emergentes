const myModule = (()=>{
    'use strict'
    let nombre = "Alex";
    
    const perimetroSquare = (side) => side * 4;
    const areaSquare = (side) => side * side;
    function calcularPerimetroCuadrado(){
        let inputSide = document.getElementById('inputSide');
        let value =  Number(inputSide.value);
        const resul = `El perimetro del cuadrado ${perimetroSquare(value)} cm`;
        document.getElementById('result').innerText = resul;
    }
    function calcularAreaCuadrado(){
        let inputSide = document.getElementById('inputSide')
        let valor = Number(inputSide.value);
        const resul = `El area del cuadrado ${areaSquare(valor)} cm2`;
        document.getElementById('result').innerText = resul
    }
    const areaTriangulo = (side1,side2,side3) => side1 + side2+ side3;

    function calcularLadoTriangulo(){
        let side1 = document.getElementById('side1')
        let side2 = document.getElementById('side2')
        let side3 = document.getElementById('side3')
        let side1Va = Number(side1.value)
        let side2Va = Number(side2.value)
        let side3Va = Number(side3.value)
        const resultado = `El triangulo mide ${areaTriangulo(side1Va,side2Va,side3Va)}..`;
        document.getElementById('result').innerText = resultado;
    }
    const alturaBase =  (sideB,sideA) => (sideB + sideA) / 2 ;
    function calcularAlturaBase(){
        let sideB = document.getElementById('sideB');
        let sideA = document.getElementById('sideA');
        let sideBva = Number(sideB.value);
        let sideAva = Number(sideA.value);
        const resultado = `La Altura y base del trangulo es ${alturaBase(sideBva,sideAva)}`;
        document.getElementById("result").innerText = resultado;
    }

    const diamtroRadio = (radio) => radio * 2;
    const perimetroRadio = (radio) => diamtroRadio(radio) * Math.PI;
    const areaCircle = (radio) => (radio * radio) * Math.PI;

    function calculardiamtroRadio(){
        let radio = document.getElementById('idradio');
        let idRadiov = Number(radio.value);
        const resultado = `El diamtro del Ciruclo ${diamtroRadio(idRadiov)}`;
        document.getElementById("result").innerText = resultado;
    }
    function calcularperimetro(){
        let radio = document.getElementById('idradio');
        let idRadiov = Number(radio.value);
        const resultado = `El perimetro del Ciruclo ${perimetroRadio(idRadiov)}`;
        document.getElementById("result").innerText = resultado;
    }
    function calcularArearadio(){
        let radio = document.getElementById('idradio');
        let idRadiov = Number(radio.value);
        const resultado = `El area del Ciruclo ${areaCircle(idRadiov)}`;
        document.getElementById("result").innerText = resultado;
    }

    return {
        cpc : calcularPerimetroCuadrado,
        cac : calcularAreaCuadrado,
        clt : calcularLadoTriangulo,
        cab : calcularAlturaBase,
        cdr : calculardiamtroRadio,
        cpr : calcularperimetro,
        car : calcularArearadio
    }
})();
