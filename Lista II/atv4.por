

programa
{
	funcao inicio() 
	{
		inteiro i = 1
		
		real num, med, so = 0.0, imp

		
		enquanto(i <= 12) 
		{
			limpa()
			escreva("saldo do ", i, "º mês: ")
			leia(num)
			
			so = so + num 
			i = i + 1 
		}
		
		med = so / 12
		se(med <= 350){
			imp = 0.1 * med
		}
		senao se(med > 350 e med <=600){
			imp = 0.2 * med
		}
		senao se(med > 600 e med <=850){
			imp = 0.35 * med
		}
		senao{
			imp = 0.55 * med
		}

		
		limpa()
		escreva("O saldo médio é: ", med,"\n",
		"O imprestimo disponibilizado foi: ", imp
		)

	}
}

