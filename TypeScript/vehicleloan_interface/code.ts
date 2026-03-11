/*
Notes: 
1. DONOT modify the code skeleton
2. Order of the functions given in the code skeleton should not be changed.
3. Comment the console.log() statements before evaluating the code.
*/

import { Loan } from "./loan";
import { Insurance } from "./insurance";

export class Vehicle implements Loan, Insurance {
    
    private vehicleNumber: string;
    private modelName: string;
    private vehicleType: string;
    private price: number;

    constructor(vehicleNumber: string, modelName: string, vehicleType: string, price: number) {
        // fill the code
        this.vehicleNumber = vehicleNumber;
        this.modelName = modelName;
        this.vehicleType = vehicleType;
        this.price = price;
    }

    public issueLoan(): number {
        // fill the code
        let loanAmount: number = 0;

        if (this.vehicleType === "4 wheeler") {
            loanAmount = this.price * 0.80;
        } else if (this.vehicleType === "3 wheeler") {
            loanAmount = this.price * 0.75;
        } else if (this.vehicleType === "2 wheeler") {
            loanAmount = this.price * 0.50;
        }

        return loanAmount;
    }

    public takeInsurance(): number {
        // fill the code
        let insuranceAmount: number = 0;

        if (this.price <= 150000) {
            insuranceAmount = 3500;
        } else if (this.price > 150000 && this.price <= 300000) {
            insuranceAmount = 4000;
        } else if (this.price > 300000) {
            insuranceAmount = 5000;
        }

        return insuranceAmount;
    }
}

// Uncomment the below code to debug the logic

// let car = new Vehicle("KA-01-HH-1234", "Maruti", "4 wheeler", 200000);
// console.log("Eligible loan amount: " + car.issueLoan());
// console.log("Insurance amount: " + car.takeInsurance());
