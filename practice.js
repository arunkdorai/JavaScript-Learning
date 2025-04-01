
// Switch Statement

/*
    switch(expression){
        case1 value : Statement;
        break;
        case2 value : Statement;
        break;
        case3 value : Statement;
        break;
        default: Statement
        break
    }
*/

/*
let trafficLight = "green"

switch(trafficLight){
    case "red" : console.log("Stop")
    break
    case "yellow" : console.log("Slow Down")
    break
    case "green" : console.log("Go")
    break
    default: console.log("Pay Fine")
    break
}
    */

// Fall through method

let day = "Jan"

switch(day){
    case "Monday":
    case "Wednesday":
    case "Friday": console.log("Weekday")
    break
    case "Saturday": 
    case "Sunday": console.log("WeekEnd")
    break
    default : console.log("It is not a day")
    break
}