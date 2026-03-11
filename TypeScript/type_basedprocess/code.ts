//Fill your code here


/*
Notes: 
1. Snippets given should be followed.
2. Don't change the name of the function, class, method, or property.
3. Before evaluating the code, if any testing statements are left uncommented, comment it.
*/

export function display(value: string | number | boolean): void {
    // Determine the type and log the initial message
    const type = typeof value;
    console.log(`The value is a ${type}:${value}`);

    // Call the appropriate helper function based on the type
    if (typeof value === "string") {
        processString(value);
    } else if (typeof value === "number") {
        processNumber(value);
    } else if (typeof value === "boolean") {
        processBoolean(value);
    }
}

export function processString(value: string): void {
    console.log(`Processing string value:${value}`);
    // Reverse the string by converting to array, reversing, and joining back
    const reversedString = value.split("").reverse().join("");
    console.log(`Reversed string:${reversedString}`);
}

export function processNumber(value: number): void {
    console.log(`Processing number value:${value}`);
    const squaredNumber = value * value;
    console.log(`Squared value:${squaredNumber}`);
}

export function processBoolean(value: boolean): void {
    console.log(`Processing boolean value:${value}`);
    console.log(`The value is ${value}`);
}

// Uncomment the below code to debug the logic
// display("Hello"); 
// display(123);      
// display(true);    
// display(false);