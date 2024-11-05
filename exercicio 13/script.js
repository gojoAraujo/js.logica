var altura = parseFloat(prompt("Indique a sua altura "))
var genero = parseFloat(prompt("Informe o seu gênero "))
var peso
var m
var f
var idealm
var idealf

if (genero == "m") {
    idealm = (72.2 * altura ) - 58
    console.log("O seu peso ideal é de " + idealm)
}

else {
    idealf = (62.1 * altura ) - 44.7
    console.log ("O seu peso ideal é de " + idealf)
}

prompt("Informe o seu peso ")

if(peso < "idealm"){
console.log ("Você está abaixo do peso")
}

else if (peso > "idealm"){
console.log("você está acima do peso ")
}

else{
console.log("Você está com o peso ideal para a sua altura ")
}
