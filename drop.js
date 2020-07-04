class Drop {
    constructor () {
        this.x=random(width);
        this.y=0;
    }
    fall(){
       this.y=this.y+random(5,10);
      if( this.y>height){
          this.y=random(-50,0)
      }
    }
display(){
    line(this.x,this.y,this.x,this.y+random(50,10))

}
}