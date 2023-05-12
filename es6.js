console.log("hi we are in es6");
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};
circle.draw();

function Circle(radius) {
    console.log('this',this);
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
    return this;
}
const another = new Circle();