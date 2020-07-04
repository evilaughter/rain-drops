var rainDrops=[];

function setup() {
  createCanvas(1600,800);
  //createSprite(400, 200, 50, 50);
  for (i=0;i<500;i<i++){
    rainDrops[i]=new Drop();
  }
}

function draw() {
  background(0);  
  stroke(random(0,255),random(0,255),random(0,255))
  for (i=0;i<500;i<i++){
    rainDrops[i].fall();
    rainDrops[i].display();
  }
}