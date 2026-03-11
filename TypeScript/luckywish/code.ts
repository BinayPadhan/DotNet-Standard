/* Notes: 
1. Snippets given should be followed.
2. Don't change the name of the function, class, method, or property. 
3. The 'default' keyword should not be used for exports.
4. Before evaluating the code, if any testing statements are left uncommented, comment it.
*/

export function greet(name: string, date: Date = new Date()): string {
    const hours = date.getHours();
    let greeting: string = "";

    // Determine the session based on hours
    // 0 to 12 (inclusive) -> Good morning
    // 12 to 18 (inclusive) -> Good afternoon
    // greater than 18 -> Good evening
    if (hours >= 0 && hours <= 12) {
        greeting = "Good morning";
    } else if (hours > 12 && hours <= 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good evening";
    }

    // Call checkVowelCount to determine the contest result
    if (checkVowelCount(name)) {
        return `${greeting}, ${name}! , congratulations on winning the contest!`;
    } else {
        return `${greeting}, Better luck next time`;
    }
}

export function checkVowelCount(name: string): boolean {
    const vowels = "aeiouAEIOU";
    let count = 0;

    // Count the number of vowels in the name
    for (let char of name) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    // Return true if count is even, otherwise false
    return count % 2 === 0;
}

// Uncomment the below code to debug the logic
// console.log(greet('Johni')); 
// Note: 'Johni' has 2 vowels (o, i), which is even, so it should return the winning message.