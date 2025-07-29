"use strict";
var _a;
const x = 22;
console.log(x);
const y = "Gaurav";
console.log(y);
const z = true;
console.log(z);
const func1 = (x) => {
    return x + 1;
};
const value = func1(4);
console.log(value);
// let a: number = -2;
// console.log(a);
// Wrapper around explicit type Number, String, 
// let a:Number = 22;
// console.log(a);
// let result: number | undefined = undefined;
// result=225
// console.log(result);
let arr = [["hello", 2], [true, 44], []];
let newArr = arr.flat();
console.log(newArr);
// tuples fixed length of an array, defined values for each position in the array
let arr1 = [2, "gaurav", true];
console.log(arr1);
// for 2d array
let arr2d = [[2, "gaurav", true], [8, "saurav", false]];
console.log(arr2d);
// for 3d array
let arr3d = [[2, "gaurav", [true]], [8, "saurav", [false]]];
console.log(arr3d[0][2]);
// Literals & Enums
let direction;
// number enums
var Size;
(function (Size) {
    Size[Size["Smallest"] = 0] = "Smallest";
    Size[Size["Medium"] = 1] = "Medium";
    Size[Size["Large"] = 2] = "Large";
})(Size || (Size = {}));
var size = Size.Large;
console.log(size);
// Any: Ignore type checking ,
let i = 22;
console.log(i);
//  Unknown  perform typecast
let j = "Hi! User";
console.log(j);
// Optional chaining
const array = [{ name: "User" }, { name: "Saurav" }, { name: "Amit" }];
const el = (_a = array.pop()) === null || _a === void 0 ? void 0 : _a.name;
console.log(el);
// Exclamation mark insteadof ?
const array1 = [[{ name: "tim" }]];
// let el1 = array1.pop()?.pop()?.name;  insteadof use ! mark => the compiler to ignore the posibilty of it being undefined
let el1 = array1.pop().pop().name;
console.log(el1);
// functions
function Add(x, y = 10) {
    return x + y;
}
// Add 2 digit number
const add = Add(4);
console.log(add); // 10
function calbackFunc(func1, param1, param2) {
}
calbackFunc(Add, "Tim", true);
// Advanced fn
function sum(...nums) {
    const sums = nums.reduce((acc, num) => acc + num, 0);
    console.log(sums);
}
sum(3, 5, 6, 7);
sum();
sum(4, 8, 12, 11, 34, 27);
const person = {
    name: "Gaurav",
    age: 25
};
console.log(person);
function getPerson(p) {
    return {
        name: "User1",
        age: 23
    };
}
// Classes
class ExamplePublic {
    constructor() {
        this.publicProperty = "I'm public";
        // Same as above (public is default)
        this.defaultProperty = "I'm also public";
    }
    publicMethod() {
        return "Public method";
    }
}
const instance = new ExamplePublic();
console.log(instance.publicProperty); // Accessible
console.log(instance.defaultProperty); // Accessible
console.log(instance.publicMethod()); // Accessible
// Private property For implementation details that shouldn't be exposed
class ExamplePrivate {
    constructor() {
        this.privateProperty = "I'm private";
    }
    privateMethod() {
        return "Private method";
    }
    // public method can accessible through it => above private fn 
    accessPrivate() {
        // console.log(this.privateProperty); // Accessible within class
        // console.log(this.privateMethod()); // Accessible within class
        // Instead of console.log, we return the values
        return {
            property: this.privateProperty,
            methodResult: this.privateMethod()
        };
    }
}
const instance2 = new ExamplePrivate();
// console.log(instance2.privateProperty); // Error: Property is private
// console.log(instance2.privateMethod()); // Error: Method is private
// instance2.accessPrivate(); // Works with console log commented code - accesses private members internally
const { property, methodResult } = instance2.accessPrivate();
console.log(property); // "I'm private"
console.log(methodResult);
// protected => For members that should be available to subclasses but not publicly
class ExampleParent {
    constructor() {
        this.protectedProperty = "I'm protected";
    }
    protectedMethod() {
        return "Protected method";
    }
}
// extend the class parent 
class ExampleChild extends ExampleParent {
    accessProtected() {
        // console.log(this.protectedProperty); // Accessible in subclass
        // console.log(this.protectedMethod()); // Accessible in subclass
        return {
            protectedProperty: this.protectedProperty,
            protectedMethod: this.protectedMethod()
        };
    }
}
const parent1 = new ExampleParent(); //check parent directly or created constructor
// console.log(parent.protectedProperty); // Error: Not accessible outside class hierarchy
const child = new ExampleChild(); //child constructor created
const { protectedProperty, protectedMethod } = child.accessProtected(); // Works - accesses protected members in subclass destructure
console.log(protectedProperty); // accessible
console.log(protectedMethod); //accessible
// Abstract Class
class Animal {
    move(duration) {
        console.log("Moving...");
        // this.makeSound(duration ); // prints => Woof Woof! for 5 seconds
    }
}
class Dog extends Animal {
    makeSound(duration) {
        console.log(`Woof Woof! for ${duration} seconds`);
    }
}
const myDog = new Dog();
myDog.makeSound(5); // "Woof!"
myDog.move(5); // "Moving..."
// Static attribute methods
// non-access modifier used by attributes and methods
// variables and methods that are associated with each instance of the class
class NewUsers {
    constructor(names) {
        NewUsers.incCount++;
        this.names = names;
    }
}
NewUsers.incCount = 0;
const user1 = new NewUsers("Sonu");
console.log(user1.names, NewUsers.incCount); //COUNT 1
const user2 = new NewUsers("Sonu2");
console.log(user2.names, NewUsers.incCount); //COUNT 2
// Normal Class
class Store {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index];
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    getAllItems() {
        return this.items;
    }
}
let constructor1 = new Store();
constructor1.addItem(4);
constructor1.addItem(8);
let getData = constructor1.getItem(0);
let getAll = constructor1.getAllItems();
let remove = constructor1.removeItem(4);
console.log(getData, getAll, remove);
// Use Generics => <T> DECLARE MULTIPLE VARIABLES
class StoreGenerics {
    constructor() {
        this.items = [];
    }
    addItem(item) {
        this.items.push(item);
    }
    getItem(index) {
        return this.items[index];
    }
    removeItem(index) {
        this.items.splice(index, 1);
    }
    getAllItems() {
        return this.items;
    }
}
let cnstrr = new StoreGenerics();
// Correct way to add items - must match the DataStores interface
cnstrr.addItem({ name: "Saurav", id: 1 }); // add data same as interface AS OBJECT
cnstrr.addItem({ name: "John", id: 8 });
let getItem = cnstrr.getItem(0);
let getAllItem = cnstrr.getAllItems();
let removeItems = cnstrr.removeItem(1);
console.log(getItem, getAllItem, removeItems);
function compareCoords(p1, p2) {
    return [p1[0], p2[1]];
}
const contact = {
    name: "tim",
    email: "tim@gmail.com",
    phone: ""
};
let log;
function handleMsg(log) {
    switch (log.type) {
        case "warning":
            console.log(log.msg);
            break;
        case "info":
            console.log(log.text);
            break;
        case "success":
            console.log(log.message);
            break;
        default:
            console.log("Invalid Type");
    }
}
handleMsg({ type: "success", message: "Operation succeeded" });
// Modules (import Export)
// Namespaces
// types.ts => it will contain all of the different type definitons
// function getCurrentPosition(){
//     return new Promise((resolve, reject)=>{
//         navigator?.geolocation?.getCurrentPosition(resolve, reject);
//     });
// };
// async function getUserLocation() {
//     try {
//         const navigation = await getCurrentPosition();
//         console.log(navigation);
//     } catch (error) {
//         console.log(error);
//      }
// }
// getUserLocation();
