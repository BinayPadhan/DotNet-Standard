/**
* Computes the weight difference: categoryWeight - currentWeight
*/
export function weightDifference(categoryWeight: number, currentWeight: number): number {
    // Standardizing on category - current to determine the 'gap'
    return categoryWeight - currentWeight;
}
 
/**
* Categorizes the player based on the difference returned by weightDifference.
*/
export function categorizePlayersByWeight(playerName: string, categoryWeight: number, currentWeight: number): string {
    const diff = weightDifference(categoryWeight, currentWeight);
 
    if (diff < 0) {
        // currentWeight is higher than category (e.g., 49 - 52 = -3)
        // We use Math.abs to show '3 kg' in the string
        return `${playerName}, you have to lose ${Math.abs(diff)} kg to play under the category of ${categoryWeight} kg`;
    } else if (diff > 0) {
        // currentWeight is lower than category (e.g., 55 - 50 = 5)
        return `${playerName}, you have to gain ${diff} kg to play under the category of ${categoryWeight} kg`;
    } else {
        // currentWeight matches categoryWeight
        return `${playerName}, you are maintaining the correct weight to play under the category of ${categoryWeight} kg`;
    }
}