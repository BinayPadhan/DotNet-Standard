function generateThresholdSequence(num, threshold, errorCallback, 
aboveThresholdCallback, errorAboveThreshold, difference = 2) {
 //  Fill the code here
 if(num < 1 || typeof num !== "number" || Number.isNaN(num)){
     return errorCallback("Invalid input: number must be greater than or equal to 1");
 }
 
 if(typeof threshold !== "number" || Number.isNaN(threshold)){
     errorCallback("Invalid input: threshold must be a valid number");
     return;
 }
 
 let sequence = [];
 let current = 0;
 
 for ( let i=0;i<num;i++){
     sequence.push(current);
     current+=difference;
 }
 
 let filtered = sequence.filter(n => n > threshold);
 
 if(filtered.length === 0){
     return errorAboveThreshold(`No numbers found above the threshold ${threshold}`);
 }
 
 return aboveThresholdCallback(`Numbers greater than ${threshold} are: ${filtered.join(", ")}`);

}


// Uncomment this line to verify the output in the console
generateThresholdSequence(8, 7,
  (error) => console.log(error),
  (aboveThresholdMessage) => console.log(aboveThresholdMessage),
  (errorAboveThreshold) => console.log(errorAboveThreshold)
);


module.exports = {
  generateThresholdSequence,
};
