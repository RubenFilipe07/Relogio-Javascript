function popup(){
  window.open ('personalização.html','popup', "width=350, height=400, top=100, left=0, scrollbars=no")
}

function armazenar(){
  let corHora = document.getElementById('cor').value
  let corFundo = document.getElementById('fundo').value
  let corMoldura = document.getElementById('moldura').value
  localStorage.setItem('cor', corHora);
  localStorage.setItem('fundo', corFundo);
  localStorage.setItem('moldura', corMoldura);
sair();
}

function sair(){
  window.close();
}


function definir(){
  document.getElementById("hora").style.color = localStorage.getItem('cor')
  document.getElementById("relogio").style = "background-color: " + localStorage.getItem('fundo') //fundo
  document.getElementById("relogio").style = "border: 2px solid " + localStorage.getItem('moldura') //borda da moldura
  document.getElementById("fundo").style = "background-color: " + localStorage.getItem('fundo') //cor da moldura interna
}