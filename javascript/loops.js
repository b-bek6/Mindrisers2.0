/*
    loops:

    task-1 is incomplete
    task-2 is complete
*/

let todos = [
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    
    {
        "userId": 1,
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
    },
    
    {
        "userId": 1,
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
    },
    
    {
        "userId": 1,
        "id": 4,
        "title": "et porro tempora",
        "completed": true
    },
    
    {
        "userId": 1,
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": true
    }
]
 
for(let i = 0; i<5;i++){

    todos[i].completed ? console.log(`The task-${todos[i].id} is complete`) : console.log(`The task-${todos[i].id} is incomplete`);

    /*
    if(todos[i].completed){
        console.log(`The task-${todos[i].id} is complete`);
    } else {
        console.log(`The task-${todos[i].id} is incomplete`);
    }
    */
}
function status(todos){
    if(todos.completed){
        console.log(`The task-${todos.id} is complete`);
    } else {
        console.log(`The task-${todos.id} is incomplete`);
    }
};
console.log("\n")
status(todos[0]);
status(todos[1]);
status(todos[2]);
status(todos[3]);
status(todos[4]);