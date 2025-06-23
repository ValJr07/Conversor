let bit = 350000
let euro = 6.37
let dolar = 5.5
const real = parseFloat(document.getElementById("real").value)

function calcular_conversor(a,b){
    return a/b
}

function mostrar(){
    const real = parseFloat(document.getElementById("real").value)
    let resultD = calcular_conversor(real,dolar)
    let resultE = calcular_conversor(real,euro)
    let resultB = calcular_conversor(real,bit)
    document.getElementById("dolar").textContent = "Dolar: " + resultD
    document.getElementById("euro").textContent = "Euro: " + resultE
    document.getElementById("bitcoin").textContent = "Bitcoin: " + resultB
}