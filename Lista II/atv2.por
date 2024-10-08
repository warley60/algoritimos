programa {
  funcao inicio() {
    inteiro num, res, i
		
		escreva("Digite um número para ver sua tabuada: ")
		leia(num)
		limpa()
		para (i = 1; i <= 10; i++) 
		{
			res = num * i 
			escreva (num, " X ", i, " = ", res , "\n")
		}
    
  }
}
