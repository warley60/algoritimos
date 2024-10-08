programa {
  funcao inicio() {
    inteiro i, soma = 0, num1 = 0, num2 = 0

    escreva("Digite o primeiro número para o intervalo:")
    leia(num1)

    escreva("Digite o segundo número para o intervalo:")
    leia(num2)
    limpa()
    enquanto(num2 <= num1){
      escreva("A ordem do número não se encaixa nos parametro, digite um segundo numero maior que o primeiro: ")
      leia(num2)
      limpa()

    }
    i = num1
    para(i;i<=num2;i++){
      soma = soma + i
    }

    escreva("A soma do intervalo de ", num1, " até ", num2, " é ", soma)
  }
}
