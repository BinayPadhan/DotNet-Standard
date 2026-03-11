// 1. Variable declaration: Use 'export const' to ensure the 
// reference to the array is immutable, while its content remains mutable.
export const names: string[] = [];
 
/**
* Adds a name to the names array and returns the updated array.
*/
export function addName(name: string): string[] {
    names.push(name);
    return names;
}
 
/**
* Sorts the names in alphabetical order (A-Z) and returns the array.
*/
export function sortNames(): string[] {
    names.sort();
    return names;
}
 
/**
* Reverses the current order of names in the array and returns it.
*/
export function reverseNames(): string[] {
    names.reverse();
    return names;
}
 
// Ensure no uncommented code (like addName('John')) is left here.