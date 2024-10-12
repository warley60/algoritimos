var num1 = Number(prompt("Digite o primeiro numero: "))
var num2 = Number(prompt("Digite o segundo numero: "))
var som = 0
while(num2 <= num1){
    num2 = Number(prompt("O segundo numero deve ser maior que o primeiro, digite novamente: "))
}

for(num1 ; num1 <= num2 ; num1++){
    som = som + num1
}
alert("A soma do intervalo dos dois numeros é: "+ som)

