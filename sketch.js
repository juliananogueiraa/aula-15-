function setup() {
  createCanvas(600, 300);
  background("#4CAF50");//funçao para pintar o fundo
}

function draw() {
 stroke ("blue"); //alterar a cor da borda do desenho 
  fill("green"); //alterar a cor de preenchimento do desenho 


   if (mouseIsPressed){
    rect(mouseX,mouseY,80,40);
   }
  }