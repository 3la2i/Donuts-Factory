let name = prompt("Please enter your name");
function askGender() {
    let gender = prompt("Please enter your gender (male/female)");

    while (gender.toLowerCase() !== 'male' && gender.toLowerCase() !== 'female') {
        gender = prompt("Invalid input. Please enter your gender (male/female):");
    }
}

// while (gender !== "male" || "female" ){
//     gender = prompt("please enter your gender male/female");}
//     if(male )




    let gender = askGender();



    

    if (gender.toLowerCase() === 'male') {
        alert("Welcome Mr. " + name + "!");
    } else if (gender.toLowerCase() === 'female') {
        alert("Welcome Ms. " + name + "!");
    }
    





let order = prompt("What would you like to order? Donut, Coffee, Ice Cream, or Bakery?")

switch (order) {
    case 'donut':
        alert("You ordered a donut.");
        break;
    case 'coffee':
        alert("You ordered a coffee.");
        break;
    case 'ice cream':
        alert("You ordered an ice cream.");
        break;
    case 'bakery':
        alert("You ordered from the bakery.");
        break;
    default:
        alert("Invalid choice. Please choose from Donut, Coffee, Ice Cream, or Bakery.");
}


let = alert("your order is bieng brebaired")


// the name and the order

console.log("User Name: " + name);
console.log("Order: " + order);


