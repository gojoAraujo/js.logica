var n1 = parseFloat(prompt("Digite a sua primeira nota "))
var n2 = parseFloat(prompt("Digite a sua segunda nota "))
var media = 0 

media = (n1 + n2)/2 

if(media <4 ){
console.log("REPROVADO")
alert("REPROVADO")
} 

else if( (media >= 4) && (media < 7)){
console.log("RECUPERACAO")
alert("RECUPERACAO")
}

else if((media => 7) && (media <=10 )){
console.log("APROVADO")
alert("APROVADO")
}

else if(media >10 ){
    console.log("BONUS")
    alert("BONUS")
}