programa {
  funcao inicio() {
    real alt, peso, imc
    escreva("Digite sua altura em metros: ")
    leia(alt)
    limpa()
    escreva("Digite seu peso em kg: ")
    leia(peso)
    limpa()
    imc = peso/(alt*alt)
    se(imc < 18.5){escreva("seu imc é ", imc, " voce tem grau de obesidade 0, classificaçao magreza")}
    senao se(imc <= 24.9){escreva("seu imc é ", imc, " voce tem grau de obesidade 0, classificaçao normal")}
    senao se(imc <= 29.9 ){escreva("seu imc é ", imc, " voce tem grau de obesidade 1, classificaçao sobrepeso")}
    senao se(imc <= 39.9 ){escreva("seu imc é ", imc, " voce tem grau de obesidade 2, classificaçao obesidade")}
    senao{escreva("seu imc é ", imc, " voce tem grau de obesidade 3, classificaçao obesidade grave")}



  }
}
