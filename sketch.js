var car
var wall
var speed
var weight







function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);
  speed = random(10,100)
  car.velocityX = speed;
  car.shapeColor = "yellow"
  wall = createSprite(700,200,60,200)
  wall.shapeColor = "grey"
  weight = random(400,1500)
}

function draw() 
{
  background(0);  
  drawSprites();
  if(wall.x - car.x < wall.width/2 + car.width/2)
  {
    car.velocityX = 0
    var deformation = 0.5*weight*speed*speed/22500
    
    if(deformation < 50)
    {
      car.shapeColor = "red"
    }
    
    if(deformation > 100)
    {
      car.shapeColor = "green"
    }
  
    if(deformation > 50 && deformation < 100)
    {
      car.shapeColor = "darkblue"
    }
  }
}