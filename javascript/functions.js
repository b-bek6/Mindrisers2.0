let task1 = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}

let task2 = {
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
}

let task3 = {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
}

let task4 = {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
}

let task5 = {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": true
}

function display(task, arg){
    console.log(`Task-${task[arg]} is ${task.completed}`)
}
display(task1, "id");
display(task2, "title");
display(task3, "id");
display(task4);
display(task5);
// if (task1["completed"]==false){
//     console.log("Task-1 is false");
// }else{
//     console.log("Task is true");
// }


/* 
    WAP to calculate sum of 1 and 2
    WAP to calculate sum of 1 and 3
    WAP to calculate sum of 2 and 3
    WAP to calculate sum of 2 and 2

    the sum of 1 and 2 is 3;
    the sum of 2 and 3 is 5
*/

let sum = {
    a : 1,
    b : 2,
    c : 3
}

console.log(`The sum of ${sum.a} and ${sum.b} is ${sum.a+sum.b}`);
console.log(`The sum of ${sum.b} and ${sum.c} is ${sum.b+sum.c}`);



// DRY - donto repeat yourserlf

/* 
    function -performs a certain task
    current: sumandDuouble


    function syntax
    
        function <function name>(){
            //do your task here..
        }
        execute | call a function  // for execution
    */
console.log("______________________")
function sumAndDouble(x,y) // parameters
{
    console.log(`The sum of ${x} and ${y} is ${y+x}`);
}

sumAndDouble(1,2); //calling a funtion with argument
sumAndDouble(2,3); //calling a funtion
sumAndDouble(1,3); //calling a funtion
sumAndDouble(3,4); //calling a funtion


/* WAP to find the difference of two numbers (10,5) (100,50) */

function difference(num1, num2){
    console.log(`The difference of ${num1} and ${num2} is ${num1 - num2}`);
}
difference(10,5);
difference(100,50);


