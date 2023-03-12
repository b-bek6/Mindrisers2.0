/* conditions */

let will_rain = true;
// will_rain = false;

/* condition syntax
    if(<condition>){
        // do truthy task
    } else {
        // do false task
    }
    */

if(will_rain)
    console.log("Take umbrella");
else
    console.log("No need to take umbrella");


// nedted , else if 

if (will_rain){
    console.log("take umbrella")
} else if(has_probability) {
    console.log("You wish")
} else {
    console.log("No need to take")
}

/* wap to calculate a number is even or odd*/

let num =10;
if (num%2==0) {
    console.log("even number");
} else {
    console.log("Odd number");
}