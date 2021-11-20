let xVaquinha = 200
let yVaquinha = 370
let larguraVaquinha = 30
let alturaVaquinha = 30
let passoVaquinha = 0

let colisao = false

let meusPontos = 0
let pontosOponente = 0

function mostraVaquinha() {
  image(imagemVaquinha, xVaquinha, yVaquinha, larguraVaquinha, alturaVaquinha)
}

function movimentaVaquinha(){
  if(keyIsDown(UP_ARROW)){
     yVaquinha -= 5
     }
  if(keyIsDown(DOWN_ARROW)){
     yVaquinha += 5
     }
  if(keyIsDown(LEFT_ARROW)){
     xVaquinha -= 5
     }
  if(keyIsDown(RIGHT_ARROW)){
     xVaquinha += 5
     }
}

function verificaColisao(){
  for(let pos = 0 ; pos < imagemCarros.length ; pos++){
    colisao = collideRectCircle(xCarros[pos], yCarros[pos],     larguraCarro, alturaCarro, xVaquinha, yVaquinha, 30);  
    
    if(colisao){
      colidiu()
      
      if(pontoMaiorQueZero()){
        meusPontos -=1   
         }
       }
  }
}

function pontoMaiorQueZero(){
  return meusPontos > 0
}

function colidiu(){
  yVaquinha = 370
}

function incluirPontos(){
  textAlign(CENTER)
  fill(color(255, 225, 0))
  text(meusPontos, width / 5, 27)
  textSize(25)
}


function marcaPonto(){
  if(yVaquinha < 15){
     meusPontos +=1
    colidiu()
    
     }
}

function podeSeMover(){
  return yVaquinha < 366
}

