const fs = require('fs');

/**
 * Requirement: Reads the contents of a file synchronously.
 * @param {string} fileName 
 * @returns {string} content of the file
 */
function getFileContent(fileName) {
    // readFileSync returns a Buffer by default; we use 'utf8' to get a string
    const content = fs.readFileSync(fileName, 'utf8');
    return content;
}

/**
 * Requirement: Splits content by newline and calculates the sum.
 * @param {string} content 
 * @returns {number} calculated sum
 */
function calculateSum(content) {
    // Split by newline and filter out any empty strings/whitespace
    const numbers = content.split('\n').map(num => num.trim());
    
    let totalSum = 0;
    numbers.forEach(num => {
        if (num !== "") {
            totalSum += Number(num);
        }
    });
    
    return totalSum;
}

/**
 * Requirement: Writes the result to a file in a specific format.
 * @param {string} outputFile 
 * @param {number} result 
 */
function saveResultToFile(outputFile, result) {
    const dataToWrite = `Sum of all numbers: ${result}`;
    
    // Synchronous write operation
    fs.writeFileSync(outputFile, dataToWrite);
    
    // Requirement: Success message to console
    console.log("Result saved to the output file!");
}

// Console Output for Verification
const inputFileName = 'input.txt';
const outputFileName = 'result.txt'; 

try {
    const fileData = getFileContent(inputFileName);
    const sumOfNumbers = calculateSum(fileData);
    saveResultToFile(outputFileName, sumOfNumbers);
} catch (err) {
    console.log("Error processing file:", err.message);
}

// Export for Evaluation
module.exports = {
    getFileContent,
    calculateSum,
    saveResultToFile
};