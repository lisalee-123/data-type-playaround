//primitive (simple) Data Types

//number
let num = 2;
let newNum = 7.58; //float

//string
let favFood = "Lasagna";
let favColor = "yellow";

//Boolean (2 values=true/false)
console.log(1 > 100); //false
let js = "cool";
console.log(js == "cool");

//undefined not defined YET
let channelName; //no value defined

//null actually empty value

//----non-Primitives (can store multiple values)----
//Obejcts (arrays, objects)

let myList = ["amit", true, "Dev Dreamer", 7];
//access Array
console.log(myList[1]);

//function
function hello() {
  console.log("hello");
}

//another way to write a function
let anotherHello = function () {
  console.log("another way to say hello");
};
//call the function
hello();
anotherHello();

//Objects
let character = {
  name: "fantasyname",
  color: "blue",
  speed: 100,
};

console.log(character.speed);
