programa {
  inclua biblioteca Matematica --> mat
  funcao inicio() {
    real numero, ra, pot
    escreva("Digite um numero: ")
    leia(numero)
    ra = mat.raiz (numero, 2.0)
    pot = mat.potencia(numero, 2.0)
    escreva("\nO número informado foi: ", numero)
    escreva("\nO número ao quadrado é: ", pot, "\n")
		escreva("A raiz quadrada do número é: ", ra, "\n")
  }
}
