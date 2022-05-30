class Mark{
    constructor(height,weight){
        this.height=height;
        this.weight=weight;
    }
    bmi(){
        return(this.mass = this.weight / (this.height * this.height));
    }
}
let mark = new Mark(5.3,74);
let x=mark.bmi();
let jhon = new Mark(6,80);
let y=jhon.bmi();
console.log(x);
console.log(y);
if(x>y){
    console.log("hello...");
}