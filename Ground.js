class Ground{

constructor(){
var ground_options = {
isStatic : true

}
this.body = Bodies.rectangle(200,395,500,10,ground_options);
World.add(world,this.body);
}

display(){
   var pos = this.body.position;
    fill("brown")
    rectMode(CENTER);
    rect(pos.x,pos.y,400,10);
}
   
}
















