const readline = require('readline-sync')
var listas = []
var i = 0
var escolha = 0
var escolha_opções 
var check = 1
let confirm = 0
let resposta = 0


do{
    console.clear()
    escolha_opções = parseInt(readline.question(`Escolha uma das opcoes: \n [1]Inserir , [2]Apagar, [3]Listar [4]Sair: `));
    
    if(escolha_opções < 1 || escolha_opções > 4 ){ /*Caso o valor n seja possivel*/
      console.clear()
      console.log("Você precisa digitar um numero possivel \n ")
      
      continue;
    }
   
switch(escolha_opções) {
    case 1: 
    console.clear()
    for(i = 0; i < listas.length; i ++){
    console.log(`[${i+1}] ` +listas[i])
    }
    resposta = readline.question(`O que deseja inserir? `)
    listas.push(resposta)
    console.clear()
    for(i = 0; i < listas.length; i ++){
        console.log(`[${i+1}] ` +listas[i])
        }
    confirm = readline.question(`Presione enter para continuar `)
    break;

    case 2:
        console.clear()
     for(i = 0; i < listas.length; i ++){
    console.log(`[${i+1}] ` +listas[i])
    }
    resposta = readline.question(`Qual numero deseja apgar? `)
    listas.splice(resposta - 1,1)
    console.clear()
    for(i = 0; i < listas.length; i ++){
        console.log(`[${i+1}] ` +listas[i])
        }
    confirm = readline.question(`Pressione enter para continuar `)
    break;

    case 3:
        console.clear()
        if(listas.length==0){
            console.log("A lista esta vazia")
            confirm = readline.question(`Presione enter para continuar `)
        }
        else{  
        for(i = 0; i < listas.length; i ++){
        console.log(`[${i+1}] ` ,listas[i])
        }
        confirm = readline.question(`Presione enter para continuar `)
        break;}
    
     case 4:
        console.clear()
        console.log("programa finalizado")
        break;   



}
}



while(escolha_opções !== 4);