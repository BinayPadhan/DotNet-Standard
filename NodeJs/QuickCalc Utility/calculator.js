// Do not make any change in this code template 

function add(a, b) {
   // Fill the code
   return a + b;
}

function subtract(a, b) {
   // Fill the code 
   return a - b;
}

function multiply(a, b) {
   // Fill the code 
   return a*b;
}

function divide(a, b) {
   // Fill the code
   if(b==0){
       return "Division by zero is not allowed"
   }
   
   return a/b;
}

// Export the calculator module with its functions
module.exports = { add, subtract, multiply, divide };

