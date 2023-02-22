import react, { useEffect, useState } from 'react' 
import axios from axios;
export default function Todoapi(){
    const [todos, setTodos] = useState([]);
    axios.get("https://jsonplaceholder.typicode.com/todos")
        .then(Response => {
        console.log(response);
 })
    return(
        <>
            <div>Todo Api</div>
            <table>
                <thead>

                </thead>
            </table>
        </>
    )
};

function Todoapi(){
    
}

/*
    CRUD operation 
    C - create 
    R - Read
    U - Update
    D - Delete

    HTTP methods
        GET
        POST
        PUT
        DELETE

        STATUS code
         2 // success
            200
            201
            204
        3 // reidrect
            302
        4// client error
            401 - unauthenticated .. // not logged in
            403 - forbidden 
            404 = resurce not found / page not found
        5 //
            500 = server error
 */



//use useEffect 