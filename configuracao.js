function popup(){
  window.open ('personalização.html','popup', "width=250, height=280, top=100, left=0, scrollbars=no")
}

function armazenar(){
  let corHora = document.getElementById('corHora').value
  let corFundo = document.getElementById('corFundo').value
  let corMoldura = document.getElementById('corMoldura').value
  localStorage.setItem('corHora', corHora);
  localStorage.setItem('corFundo', corFundo);
  localStorage.setItem('corMoldura', corMoldura);
  sair();
}

function definir(){
  document.getElementById("hora").style = "color: "+ localStorage.getItem('corHora')  //cor da hora
  document.getElementById("relogio").style = "background-color: " + localStorage.getItem('corFundo') //fundo interno da moldura
  document.getElementById("fundo").style = "background-color: " + localStorage.getItem('corFundo') //cor de fundo
  document.getElementById("relogio").style = "border: 2px solid " + localStorage.getItem('corMoldura') //borda da moldura
}

function atualizaValorInput(){
  if(localStorage.getItem('corHora') == undefined){
    localStorage.setItem('corHora', "#00ff6a");
    localStorage.setItem('corFundo', "#00000");
    localStorage.setItem('corMoldura', "#868686");
  }

  document.getElementById('corHora').value = localStorage.getItem('corHora') 
  document.getElementById('corFundo').value = localStorage.getItem('corFundo')
  document.getElementById('corMoldura').value = localStorage.getItem('corMoldura')
}

function resetar(){
  document.getElementById('corHora').value = "#00ff6a"
  document.getElementById('corFundo').value = "#00000"
  document.getElementById('corMoldura').value = "#868686"
}

function sair(){
  window.close();
}
