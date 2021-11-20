


function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemEstrada)
  
  mostraVaquinha()
  mostraCarro()
  
  movimentaVaquinha()
  movimentaCarros()
  
  verificaColisao()
  
  incluirPontos()
  marcaPonto()
}



