const bit = 350000
const euro = 6.37
const dolar = 5.5

function calcular_conversor(a,b){
    return a/b
}

function mostrar(){
    
    const real = parseFloat(document.getElementById("real").value)
    let resultD = calcular_conversor(real,dolar)
    let resultE = calcular_conversor(real,euro)
    let resultB = calcular_conversor(real,bit)
    document.getElementById("dolar").textContent = "Dolar: " + resultD.toFixed(2)
    document.getElementById("euro").textContent = "Euro: " + resultE.toFixed(2)
    document.getElementById("bitcoin").textContent = "Bitcoin: " + resultB.toFixed(8)
}