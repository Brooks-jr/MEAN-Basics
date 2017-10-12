var myNum: number = 5;
var myString: string = "Hello Universe";
var myArr: Array <number> = [1,2,3,4];
var myObj: object = { name:'Bill'};
var anythingVariable: any = "Hey";
var anythingVariable: any = 25; 
var arrayOne: Array <boolean> = [true, false, true, true]; 
var arrayTwo: Array <any> = [1, 'abc', true, 2];
var myObj: object = { x: 5, y: 10 };
// object constructor


class MyNode {
    val: number;

    constructor(val: number) {
        this.val = val;

    }
    doSomething() {
        console.log(this);
    }
}

let myNodeInstance = new MyNode(1);
console.log(myNodeInstance.val);

function myFunction() {
    console.log("Hello World");
    return;
}
function sendingErrors() {
	throw new Error('Error message');
}
