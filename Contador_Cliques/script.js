let cont = 0

function contar(){
    cont+=1
    document.getElementById("contador").textContent = "Cliques: " + cont
}
function zerar(){
    cont=0
    document.getElementById("contador").textContent = "Cliques: 0"
}