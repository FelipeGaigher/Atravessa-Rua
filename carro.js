//carros
let xCarros = [450, 450, 450, 450, 450, 450]
let yCarros = [45, 97, 150, 210, 270, 314]
let velocidadesCarros = [-3, -2, -1, -2.5, -3.5, -1.5]
let larguraCarro = 50
let alturaCarro = 30


function mostraCarro(){
  for (let pos = 0 ; pos < imagemCarros.length ; pos++){
    image(imagemCarros[pos], xCarros[pos], yCarros[pos], larguraCarro, alturaCarro)  
  }
}

function movimentaCarros(){
  for(var pos = 0 ; pos < xCarros.length ; pos++){
    xCarros[pos] += velocidadesCarros[pos]
    if(xCarros[pos] < -50){
       xCarros[pos] = 550
       }
  } 
}
