var car_Img,car,raceTrack,raceTrack_Img,score = 0,laps = 0, lap,sr;
function preload(){
  car_Img = loadImage("car.jpg")
  raceTrack_Img=loadImage("raceTrack.jpg")
}

function setup() {
  createCanvas(800,700);
  //createSprite(400, 200, 50, 50);
  sr = createSprite(500,145,10,10)
  
  lap = createSprite(410,145,10,10)
  
  raceTrack = createSprite(400,350,800,400);
  raceTrack.addImage(raceTrack_Img);
  raceTrack.scale=0.65;
  
  car = createSprite(450,146,10,10);
  car.addImage(car_Img)
  car.scale = 0.04

}

function draw() {
  background(255,255,255); 

        if(keyIsDown(RIGHT_ARROW))
        {
            car.x = car.x+3;
        } 
  
        if(keyIsDown(LEFT_ARROW))
        {
            car.x = car.x-3;
        }           
  
        if(keyIsDown(UP_ARROW))
        {
            car.y = car.y-3;

        }  
                                            if(keyIsDown(DOWN_ARROW))
        {
            car.y = car.y+3;

        }
            if(car.isTouching(lap))
        {
            
          laps++
          
        }
  
          if(car.isTouching(sr))
        {
            
          score++
          
        }

  drawSprites();
  fill(0)
  textSize(23)
  text("Complet three laps",100,100)
  //text(score,200,200)
    textSize(53)

          if(score >= 38){
  text("You won !" ,300,300)
        }
}