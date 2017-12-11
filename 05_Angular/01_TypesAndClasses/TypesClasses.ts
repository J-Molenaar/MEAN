var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array<number> = [1, 2, 3, 4];

interface myObj {
    name: string;
}
var myName: myObj = { name: "Jessica" };

var anythingVariable: any = 25;
var arrayOne:Array<boolean> = [true, false, true, true];
var arrayTwo: Array<any> = [1, 'abc', true, 2];
var myObj:{x:number , y:number} = { x: 5, y: 10 };

// object constructor
class MyNode {
    val: number;

    constructor(val) {
        this.val = 0;
        this.val = val;
    }
    doSomething() {
        this.val = 10;
    }
}
let myNodeInstnace = new MyNode(1);
console.log(myNodeInstnace.val);
//
function myFunction(): void {
    console.log("Hello World");
    return;
}
function sendingErrors(): never {
	throw new Error('Error message');
}
 
