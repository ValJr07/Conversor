function calculo(a,b){
    return a/(b*b)
}

function calcularIMC(){
    let peso = parseFloat(document.getElementById("peso").value)
    let altura = parseFloat(document.getElementById("altura").value)
    let result = calculo(peso,altura)
    document.getElementById("resultado").textContent = "Seu IMC aparecerá aqui: " + result.toFixed(2)
}