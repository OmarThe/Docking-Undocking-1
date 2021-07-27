var iss, iss_img
var spacecraft, spacecraft_img, spacecraft_img_forward, spacecraft_img_right, spacecraft_img_left
var hasDocked  = false
var bgImage
var dockingPoint

function preload(){
  bgImage = loadImage("Docking-undocking/Docking-undocking/spacebg.jpg")

  iss_img = loadImage("Docking-undocking/Docking-undocking/iss.png")

  spacecraft_img = loadAnimation("Docking-undocking/Docking-undocking/spacecraft1.png")
  spacecraft_img_forward = loadAnimation("Docking-undocking/Docking-undocking/spacecraft2.png")
  spacecraft_img_right = loadAnimation("Docking-undocking/Docking-undocking/spacecraft4.png")
  spacecraft_img_left = loadAnimation("Docking-undocking/Docking-undocking/spacecraft3.png")

}
function setup() {
  createCanvas(displayWidth-70,displayHeight-180);

  iss = createSprite(400, 200, 50, 50);
  iss.addImage("iss", iss_img)

  spacecraft = createSprite(displayWidth/2, displayHeight/2, 50, 50);
  spacecraft.addAnimation("spacecraft1", spacecraft_img)
  spacecraft.addAnimation("spacecraft2", spacecraft_img_forward)
  spacecraft.addAnimation("spacecraft3", spacecraft_img_left)
  spacecraft.addAnimation("spacecraft4", spacecraft_img_right)
  spacecraft.scale = 0.45

  dockingPoint = createSprite(330, 190, 50, 50);
  dockingPoint.visible = false
  

}

function draw() {
  image(bgImage,0,0,displayWidth-70,displayHeight-180) 

  if(!hasDocked){
    
    if(keyDown(DOWN_ARROW)){
      spacecraft.velocityY = 3
      spacecraft.changeAnimation("spacecraft1")
    }
    else if(keyDown(RIGHT_ARROW)){
      spacecraft.velocityX = 3
      spacecraft.changeAnimation("spacecraft4")
    }
    else if(keyDown(LEFT_ARROW)){
      spacecraft.velocityX = -3
      spacecraft.changeAnimation("spacecraft3")
    }
    else if(keyDown(UP_ARROW)){
      spacecraft.velocityY = -4
      spacecraft.changeAnimation("spacecraft2")



      if(spacecraft.isTouching(dockingPoint)){
        hasDocked = true
        text("Docking Successful!",displayWidth/2,displayHeight*0.75)
        spacecraft.velocityX = 0, spacecraft.velocityY = 0
      }
    }
    else spacecraft.changeAnimation("spacecraft1"), spacecraft.velocityX = 0, spacecraft.velocityY = 0 
  }

  if(spacecraft.isTouching(dockingPoint)){
    textSize(80)
    text("Docking Successful!",displayWidth/4,displayHeight*0.75)
    
  }

  
  drawSprites();
}