// Do not make any change in this code template 

//import the calculator module
const calculator = require('./calculator');


function performCalculation(a, b, operation) {

// Fill the code
switch (operation) {
    case 'add':
        // code
        return calculator.add(a, b);
    
    case 'subtract':
        return calculator.subtract(a, b);
    
    case 'multiply':
        return calculator.multiply(a, b);
        
    case 'divide' :
        return calculator.divide(a, b);
    
    default:
        return "Invalid operation";
}

}

// Example usage:
console.log('add',performCalculation(10, 5, 'add'));      
console.log('subtract',performCalculation(10, 5, 'subtract')); 
console.log('multiply',performCalculation(10, 5, 'multiply')); 
console.log('divide',performCalculation(10, 0, 'divide'));  


module.exports = performCalculation;