// DO NOT MODIFY THE FUNCTION NAME OR TUPLE'S VARIABLE NAME.

// Declare the tuple variable as given in the description and export it 
export type OverScore = [number, number];

// Write the function and its implementation as defined in the description and export it
export function calculateScores(matchOvers: OverScore[]) {
    // Initializes variables to 0
    let powerplay: number = 0;
    let middleOver: number = 0;
    let lastOver: number = 0;
    let total: number = 0;

    // Iterate through each tuple
    for (let overData of matchOvers) {
        const overNumber = overData[0];
        const score = overData[1];

        // Categorize based on over numbers
        if (overNumber >= 1 && overNumber <= 6) {
            powerplay += score;
        } else if (overNumber >= 7 && overNumber <= 15) {
            middleOver += score;
        } else if (overNumber >= 16 && overNumber <= 20) {
            lastOver += score;
        }

        // Calculate overall total
        total += score;
    }

    // Return the calculated totals in an object format
    return {
        powerplay,
        middleOver,
        lastOver,
        total
    };
}

// // Uncomment the following lines to check the output

// const matchOvers: OverScore[] = [
//      [1, 8], [2, 10], [3, 6], [4, 9], [5, 7], [6, 11],
//      [7, 5], [8, 8], [9, 7], [10, 6], [11, 9], [12, 8],
//      [13, 7], [14, 10], [15, 6], [16, 8], [17, 9], [18, 7],
//      [19, 10], [20, 12]
// ];

// const scores = calculateScores(matchOvers);
// console.log('Powerplay score:', scores.