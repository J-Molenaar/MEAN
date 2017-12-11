var myNum = 5;
var myString = "Hello Universe";
var myArr = [1, 2, 3, 4];
var myName = { name: "Jessica" };
var anythingVariable = 25;
var arrayOne = [true, false, true, true];
var arrayTwo = [1, 'abc', true, 2];
var myObj = { x: 5, y: 10 };
// object constructor
var MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this.val = 10;
    };
    return MyNode;
}());
var myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);
//
function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
    throw new Error('Error message');
}
