class cell{
  constructor(tempX,tempY){
    this.loc = createVector(tempX,tempY);
    this.v = createVector(0,0);
    this.a = createVector(0,0);
    this.maxspeed = random(5,5);
    this.maxforce = random(0.1,0.2);
    this.steer = createVector(0,0);
    this.r = random(2,30);
  }
  
  zhuanzhoua(){
    let target = flowfield.caculate(this.loc.x,this.loc.y);
    target.setMag(this.maxspeed);
    this.steer = p5.Vector.sub(target,this.v);
    this.steer.setMag(this.maxforce);
    this.applyforce(this.steer);
  }
  
  
  applyforce(force){
    this.a.add(force);
  }
  
  update(){

    this.v.add(this.a);
    this.v.limit(this.maxspeed);
    this.loc.add(this.v);
    this.a.mult(0);

    if (this.loc.x<0) {
      this.loc.x = width ;
    }else if (this.loc.x>width) {
      this.loc.x = 0;
    }
    if (this.loc.y<0) {
      this.loc.y = height ;
    }else if (this.loc.y>height) {
      this.loc.y = 0;
    }

  }
  
  display(){
    fill(0,20);
    stroke(0);
    strokeWeight(1);
    push();
    translate(this.loc.x,this.loc.y);
    //ellipse(0,0,this.r*2,this.r*2);
    rotate(this.v.heading());
    triangle(10,0,-5,3,-5,-3);
    pop();
  }


  
  
  
  
}