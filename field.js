class field{

	constructor(){
		this.w = 50;
		this.column = floor(windowWidth/this.w);
		this.row = floor(windowHeight/this.w);
		this.field = this.make2dArray(this.column,this.row);
	}




	update(t){
		let nx = t;
		for (let i = 0; i < this.column; i++) {
			let ny = t;
   	 		for (let j = 0; j < this.row; j++){
   	 			let a = map(noise(nx,ny),0,1,0,TWO_PI);
   	   			this.field[i][j] = createVector(1,0);
   	   			this.field[i][j].rotate(a);
   	   			ny+=0.2;
   	 		}
   	 		nx+=0.2
  		}
	}


	display(){
   	   	stroke(0,150);
   	   	fill(0,150);
   	   	strokeWeight(1);
		for (let i = 0; i < this.column; i++) {
			for (let j = 0; j < this.row; j++){
				ellipse(i*this.w,j*this.w,2,2);
   	   			line(i*this.w,j*this.w,i*this.w+this.field[i][j].x*25,j*this.w+this.field[i][j].y*25);
			}
		}
	}


  caculate(tempx,tempy){
      let x = floor(constrain(tempx/this.w,0,this.column-1));
      let y = floor(constrain(tempy/this.w,0,this.row-1));
      return this.field[x][y].copy();
    }





	make2dArray(temp_column,temp_row){

 		let temp_field = new Array(temp_column);
 	 		for (let i = 0; i < temp_column; i++) {
 	   			temp_field[i] = new Array(temp_row);
 	 		}
 		return temp_field;

	}






}