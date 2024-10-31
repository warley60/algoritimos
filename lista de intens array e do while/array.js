const readline = require('readline-sync')

var listas = []
var i = 0
var escolha = 0
var escolha_opções 
var check = 1

    while(check == 1){
   console.clear()
  var escolha_opções = readline.question(`Escolha uma das opcoes: \n [1]Inserir , [2]Apagar, [3]Listar [4]Sair: `)
  
  while(escolha_opções < 1 || escolha_opções > 4 ){ /*Caso o valor n seja possivel*/
    console.clear()
    console.log("Você precisa digitar um numero possivel \n ")
    var escolha_opções = readline.question(`Escolha uma das opções: \n [1]Inserir , [2]Apagar, [3]Listar [4]Sair: `)
  }

if(escolha_opções == 1){ /*inserir*/
    console.clear()
    for(i = 0; i < listas.length; i ++){
    console.log(`[${i+1}] ` +listas[i])
    }
    let resposta = readline.question(`O que deseja inserir? `)
    listas.push(resposta)
    console.clear()
    for(i = 0; i < listas.length; i ++){
        console.log(`[${i+1}] ` +listas[i])
        }
    let confirm = readline.question(`Presione enter para continuar `)

    /*fim inserir*/
    }
    else if(escolha_opções == 2){ /*apagar*/
    console.clear()
     for(i = 0; i < listas.length; i ++){
    console.log(`[${i+1}] ` +listas[i])
    }
    let resposta = readline.question(`Qual numero deseja apgar? `)
    listas.splice(resposta - 1,1)
    console.clear()
    for(i = 0; i < listas.length; i ++){
        console.log(`[${i+1}] ` +listas[i])
        }
    let confirm = readline.question(`Pressione enter para continuar `)
        /*fim apagar*/
    }else if(escolha_opções == 3){ /*listar*/
        console.clear()
            
    for(i = 0; i < listas.length; i ++){
            console.log(`[${i+1}] ` ,listas[i])
            }
            let confirm = readline.question(`Presione enter para continuar `)
            /*fim listar*/

    }else{
        console.clear()
        console.log("programa finalizado")
        check = 0
    }
}





  




