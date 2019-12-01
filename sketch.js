let cells;
let num;
let flowfield;
let t;

function setup() {
  
  createCanvas(900, 600);
  t = 0;

  flowfield = new field();
  flowfield.update(0);
  cells = [];
  num = 100;
  for (let i = 0; i<num; i++){
      cells.push(new cell(random(width),random(height)));
    }

  }


function draw() {

  background(220);

  flowfield.update(t);
  flowfield.display();
  t+=0.004;
  
  
  for(let i = 0; i<cells.length; i++){
    //let mouse = createVector(mouseX+random(-10,10),mouseY+random(-10,10));
    cells[i].zhuanzhou();
    cells[i].update();
    cells[i].display();
  }

  //fill(220);
  //stroke(220);
  //strokeWeight(6);
  //textAlign(CENTER);
  //textSize(50);
  //text('ONOAIX',width/2,height/2);


  
}




function mouseDragged(){
  cells.push(new cell(mouseX,mouseY));
}











