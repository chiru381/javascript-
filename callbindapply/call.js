//box object containing height and width
function Box(height, width) {
    this.height = height;
    this.width = width;
}



//widget object containing height, width and color
function Widget(height, width, color) {
    Box.call(this, height, width);
    this.color = color;
}



//create of instance for widget.
let widget = new Widget(100, 200, 'red');
console.log(widget);

let person = {
    name: "chiru",
};
function sample(a, b, c){
    console.log("sample", a, b, c, this.name);
}
sample.call(person, 1, 2, 3);