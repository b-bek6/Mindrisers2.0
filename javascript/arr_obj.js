/*
    Array:
        -collection of different values
        -usually it is a collection of similar data types   
        
        elements
            index // always start with 0
        syntax:
            let <arr_name> - [<value>,<value>,<value>,........]
*/  

let brands = ['levis','puma','adidas'];
brands[3]="jordan";
brands.push("bibek"); // insert
brands.pop();
console.log(brands);
// delete brands[0] 

/* 
    reading array values => we can use index
    mutate / change / update array values => use index
*/
/* 
    to delete:
        use .filter
        .splice
        .split
        .unshift
        .pop

 */

let ages = [20,11,10,'hundred',undefined, {name:'ram',age:20}];
console.log(ages);


// using index

console.log(ages[0])
/*
    objects
        - just like real life objects having different properties

        <object_name> ={
            <key | attribute | property > : <Value>,
            <key | attribute | property > : <Value>,
            <key | attribute | property > : <Value>
        }
*/

let projector = {
    color: "black",
    model: "vx-100",
    brand: "samsung"
}
console.log(projector);
console.log(projector.color);

// changing values in object
projector.color = "white"; // mutate//update//re-initialize

let bottle = {
    height: "10"
}

let personOne = {
    name: "ram",
    age: 20
}
let persontwo = {
    name: "shyam",
    age: 20
}

//array of object

let person = [personOne, persontwo];



/* swap */

let a = 10;
let b = 20;

// using temp variable

let temp = a;
a = b;
b = temp;


console.log(a + " " + b)

// using array

let arr =  [10,20];

[arr[0],arr[1]] = [arr[1],arr[0]];

console.log(arr[0] + " "  + arr[1]);

// using obj 

let obj = {
    a: 10,
    b: 20
};

[obj.a,obj.b]=[obj.b,obj.a];
console.log(obj);