/*
Notes: 
1. Follow the snippets given.
2. Don't change the name of the functions, classes, or properties. 
3. The 'default' keyword should not be used.
4. Before evaluating the code, ensure that all the testing statements are commented.
*/

export function sum(...numbers: number[]): number {
    // Emily's Turn: Calculate the sum of all numeric arguments
    let totalSum = 0;
    for (let num of numbers) {
        totalSum += num;
    }
    return totalSum;
}

export function findLongestString(...strings: string[]): string {
    // David's Turn: Identify the string with the greatest length
    if (strings.length === 0) {
        return "";
    }

    let longest = strings[0];
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > longest.length) {
            longest = strings[i];
        }
    }
    return longest;
}

// Uncomment the below code to debug the functions
// console.log(sum(22, 24, 25)); 
// console.log(findLongestString('short', 'shorter', 'shortest'));