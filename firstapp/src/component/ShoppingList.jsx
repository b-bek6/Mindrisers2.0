import{useState} from "react";


function shoppingList(){
    return(
        <>
            <h1>Shopping List</h1>
            <form>
                <input type="text" placeholder="Item" />
                <input type="text" placeholder="Quantity"/>
            </form>
        </>
        
    )
}


export default shoppingList;