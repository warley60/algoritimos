var media , emprestimo = Number = 0
media = 2496
 if(media <= 350){
    emprestimo = 0.1* media
 }
else  if(media <= 600){
    emprestimo = 0.2* media
 }
 else  if(media <= 850){
    emprestimo = 0.35* media
 }
 else{
    emprestimo = 0.55* media
 }
 console.log("O saldo médio é "+  media+" o imprestimo disponibilizado foi: "+emprestimo)