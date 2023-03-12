let person = {
    name: "ram",
    address:{
        street:"Putalisadak",
        zip: '44600'
    },
    phone:{
        ntc:980000000,
        ncell: 984764834
    }
}






//optional chaining 

person.phone?.ntc  //optional chaining  (prints undefined if there's no value)function 
person.phone?.ntc?.balance

function printUserInfo(index, key){
    console.log("Priint user-info");
    console.log(`${user[num].username}'s email is ${user[0].email}`);
}
printUserInfo(0);
printUserInfo(1);
printUserInfo(2);