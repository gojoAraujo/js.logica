var n1 = parseFloat(prompt("Digite o valor do lado do triangulo "))
var n2 = parseFloat(prompt("Digite outro valor do triangulo "))
var n3 = parseFloat(prompt("Digite o valor da base do triangulo "))


if(n1 == n2 && n2 == n3 && n3 == n1){
console.log("equilatero")
alert("equilatero")

}else if( n1 === n2 && n1 != n3 || n2 === n3 && n2 != n1 || n3 === n1 && n3 != n2 ){
console.log("escaleno")
alert("escaleno")
}

else{
    console.log("isoceles")
    alert("isoceles")
}