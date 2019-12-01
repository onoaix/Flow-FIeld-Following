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
  num = 350;
  for (let i = 0; i<num; i++){
      cells.push(new cell(50,50));
    }

  }


function draw() {

  background(220);

  flowfield.update(t);
  //flowfield.display();
  t+=0.01;
  
  
  for(let i = 0; i<cells.length; i++){
    //let mouse = createVector(mouseX+random(-10,10),mouseY+random(-10,10));
    cells[i].zhuanzhoua();
    cells[i].update();
    cells[i].display();
  }

  fill(220);
  stroke(220);
  strokeWeight(6);
  textAlign(CENTER);
  textSize(50);
  text('ONOAIX',width/2,height/2);


  
}




function mousePressed(){
  cells.push(new cell(mouseX,mouseY));
}











