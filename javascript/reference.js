/*
    reference data types
    -object 
    -array    
*/

let person_1 ={
    name: "ram",
    age: 12,
    address: {
        street: "Putalisadak",
        zip: 44600
    }
}

// let person_2 = person_1 // in person2, js stores the location of person1
//spread operator
let person_2 = {...person_1} // ... is spread operaoor // -> copies the values of object(empty object ma copy gareko) 
person_2.name = "JOHN DOE"; // overwright

let person_3 = person_2 // person3 is pointing towards the person2 person2 is pointing toward person3


console.log(person_1);
console.log(person_2);
console.log(person_3);



let brands  = ["apple", "samsung" , "lg"]

// let brands_two = brands;
brands_two[3] = "sony"  // instead of copying the values of brands variable, js stores the location of brands variable in brands_two,


let brands_two = [...brands]


console.log(brands);
console.log(brands_two);