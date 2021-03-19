const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var world,engine
var rainimage
var womenimage
var maxdrops=100
drop1=[]
drop2=[]
function preload(){
   womenimage=loadImage("women.png")
   thunder1=loadImage("thunder.png")
   thunder2=loadImage("thunder2.png")
}

function setup(){
    createCanvas(600,600)
    engine = Engine.create();
    world = engine.world;
 
    
    
 Engine.run(engine);  
}

function draw(){
    background(0
        
        
        )
    image(womenimage,100,400,200,200)
    for (var i=0;i<drop1.length;i++){
       drop1[i].display()
       
    }
    for (var j=0;j<drop2.length;j++){
        drop2[j].display()
        
     }
     
    if (frameCount%1===0){
        drop1.push(new rain(random(0,600),0,20,20))
        //drop2.push(new rain(random(10,600),random(10,600),10,10))
      }
      if (frameCount%2===0){
        //drop1.push(new rain(random(0,600),random(0,600),10,10))
        drop2.push(new rain(random(0,600),0,20,20))
      }

      if(frameCount%100===0){
var rand=Math.round(random(1,2))
if(rand===1){
    image(thunder2,200,100,300,300)

}
if (rand===2){
    
    image(thunder1,200,100,300,300)

}

console.log(rand)

      }

}   

