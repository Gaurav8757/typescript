const x: number = 22;
console.log(x);

const y: string = "Gaurav";
console.log(y);

const z: boolean = true;
console.log(z);

const func1 = (x: number): number => {
    return x + 1;
}

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
let arr1: [number, string, boolean] = [2, "gaurav", true];
console.log(arr1);

// for 2d array
let arr2d: [number, string, boolean][] = [[2, "gaurav", true], [8, "saurav", false]];
console.log(arr2d);

// for 3d array
let arr3d: [number, string, boolean[]][] = [[2, "gaurav", [true]], [8, "saurav", [false]]];
console.log(arr3d[0][2]);

// Literals & Enums
let direction: "north" | "south" | "east" | "west";
// number enums
enum Size {
    Smallest,
    Medium,
    Large
}

var size: Size = Size.Large;
console.log(size);

// Any: Ignore type checking ,
let i: any = 22;
console.log(i);

//  Unknown  perform typecast
let j: unknown = "Hi! User";
console.log(j);

// Optional chaining
const array = [{ name: "User" }, { name: "Saurav" }, { name: "Amit" }];
const el = array.pop()?.name;
console.log(el);

// Exclamation mark insteadof ?
const array1 = [[{ name: "tim" }]];
// let el1 = array1.pop()?.pop()?.name;  insteadof use ! mark => the compiler to ignore the posibilty of it being undefined
let el1 = array1.pop()!.pop()!.name;
console.log(el1);

// functions
function Add(x: number, y: number = 10) {
    return x + y;
}
// Add 2 digit number
const add = Add(4);
console.log(add); // 10

function calbackFunc(
    func1: (f: number, l?: number) => number,
    param1: string,
    param2: boolean
) {

}

calbackFunc(Add, "Tim", true);

// Advanced fn
function sum(...nums: number[]) {
    const sums = nums.reduce((acc, num) => acc + num, 0);
    console.log(sums);

}
sum(3, 5, 6, 7);
sum();
sum(4, 8, 12, 11, 34, 27);

interface Person {
    name: string,
    age: number
}

const person: Person = {
    name: "Gaurav",
    age: 25
}

console.log(person);

function getPerson(p: Person) {
    return {
        name: "User1",
        age: 23
    }
}






// Classes
class ExamplePublic {
    public publicProperty: string = "I'm public";
    // Same as above (public is default)
    defaultProperty: string = "I'm also public";

    public publicMethod() {
        return "Public method";
    }
}

const instance = new ExamplePublic();
console.log(instance.publicProperty); // Accessible
console.log(instance.defaultProperty); // Accessible
console.log(instance.publicMethod()); // Accessible


// Private property For implementation details that shouldn't be exposed
class ExamplePrivate {
    private privateProperty: string = "I'm private";

    private privateMethod() {
        return "Private method";
    }

    public accessPrivate() {
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
    protected protectedProperty: string = "I'm protected";

    protected protectedMethod() {
        return "Protected method";
    }
}

// extend the class parent 
class ExampleChild extends ExampleParent {
    public accessProtected() {
        // console.log(this.protectedProperty); // Accessible in subclass
        // console.log(this.protectedMethod()); // Accessible in subclass
        return {
            protectedProperty: this.protectedProperty,
            protectedMethod: this.protectedMethod()
        }
    }
}

const parent1 = new ExampleParent(); //check parent directly or created constructor
// console.log(parent.protectedProperty); // Error: Not accessible outside class hierarchy

const child = new ExampleChild(); //child constructor created
const { protectedProperty, protectedMethod } = child.accessProtected(); // Works - accesses protected members in subclass destructure

console.log(protectedProperty); // accessible
console.log(protectedMethod); //accessible








// Abstract Class
abstract class Animal {
    abstract makeSound(duration: number): void; // Abstract method (no implementation)

    move(duration: number): void { // Implemented method
        console.log("Moving...");
        // this.makeSound(duration ); // prints => Woof Woof! for 5 seconds
    }
}

class Dog extends Animal {
    makeSound(duration: number):void { // Must implement abstract method
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
    static incCount:number = 0;
    names: string;

    constructor(names: string){
        NewUsers.incCount++;
        this.names = names;
    }
}

const user1 = new NewUsers("Sonu");
console.log(user1.names, NewUsers.incCount); //COUNT 1

const user2 = new NewUsers("Sonu2");
console.log(user2.names, NewUsers.incCount); //COUNT 2



