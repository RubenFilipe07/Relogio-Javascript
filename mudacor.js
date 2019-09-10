cores = ["#0077ff", "#FFFFFF", "#c0c0c0", "#e1ff00", "#fe9700", "#c200c2", "#ff0000", "#00ff6a"]
         //Azul, branco, prateado, amarelo, laranja, rosa, vermelho e verde (cor original)

var cliques = 0; 
 
function alternarCor(){
 var letreiro = document.getElementById("hora")  

 if(cliques >= cores.length){
     cliques = 0
 }
 letreiro.style.color = cores[cliques]
 cliques++
}

