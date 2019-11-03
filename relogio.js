//Autor: Rúben Filipe https://github.com/rubenfilipe07
function iniciar(){
    var d = new Date();
    let horas = d.getHours(); 
    let minutos = d.getMinutes(); 
    let segundos = d.getSeconds();
 
    let dia = d.getDate();
    let mes = d.getMonth()+1; //O intervalo do mês é de 0-11, por isso o +1
    let ano = d.getFullYear();
   
    if(segundos >=0 && segundos <10) { 
        segundos = "0"+segundos 
    }
    if(minutos >=0 && minutos <10) {
        minutos = "0"+minutos
    }
    if(horas >=0 && horas <10) {
        horas = "0"+horas
    }
  
    let horario =""
 
     if(horas >=0 && horas <12){
       horario = "Am"
     }else{
       horario = "Pm"
     }
 
    if(mes <10){
       mes = "0"+mes
    }
    if(dia <10){
       dia = "0"+dia
    }
 
     var saida = document.getElementById('hora')
     saida.innerHTML = `${horas}:${minutos}:${segundos}<span id="am-pm">${horario}<\span>`
 
     var saida2 = document.getElementById('data')
     saida2.innerHTML = `${dia}/${mes}/${ano}`
 
     var intervalo = window.setInterval(iniciar, 1000);
    }