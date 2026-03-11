/*
Notes: 
1. DONOT modify the code skeleton
2. Order of the functions given in the code skeleton should not be changed.
3. Comment the console.log() statements before evaluating the code.
*/

export let resortFeedback = new Set<Membership>(); 

export class Membership {
    // Member attributes
    memberId: string;
    memberType: string;
    customerName: string;
    contactNumber: number;
    starRating: number;

    // All-argument constructor to initialize attributes
    constructor(memberId: string, memberType: string, customerName: string, contactNumber: number, starRating: number) {
        this.memberId = memberId;
        this.memberType = memberType;
        this.customerName = customerName;
        this.contactNumber = contactNumber;
        this.starRating = starRating;
    }

    // Getter methods
    getMemberId(): string { return this.memberId; }
    getMemberType(): string { return this.memberType; }
    getCustomerName(): string { return this.customerName; }
    getContactNumber(): number { return this.contactNumber; }
    getStarRating(): number { return this.starRating; }
}

export function validateStarRating(starRating: number): boolean {
    // Returns true if starRating is between 1 and 5 (inclusive)
    if (starRating >= 1 && starRating <= 5) {
        return true;
    }
    return false;
}

export function addFeedback(obj: Membership) {
    // Validate starRating before adding to the Set
    if (validateStarRating(obj.starRating)) {
        resortFeedback.add(obj);
        return true;
    } else {
        return "Invalid Star Rating";
    }
}

export function searchFeedback(option: string, optionValue: string): Membership[] {
    let result: Membership[] = [];

    // Iterate through the resortFeedback Set
    resortFeedback.forEach((member) => {
        if (option === "memberType") {
            if (member.memberType === optionValue) {
                result.push(member);
            }
        } else if (option === "starRating") {
            // Typecast the string optionValue into a number for comparison
            let ratingToSearch = Number(optionValue);
            if (member.starRating === ratingToSearch) {
                result.push(member);
            }
        }
    });

    return result;
}

// Uncomment this code to debug the functions
// let rf1 = new Membership("SS01", "SSS", "Jerry", 2189100981, 4);
// let rf2 = new Membership("SS02", "GSS", "Benedict", 2589100982, 5);
// let rf3 = new Membership("SS03", "PSS", "Henry", 2489100983, 3);
// let rf5 = new Membership("SS05", "PSS", "Nancy", 2189100987, 2);
// addFeedback(rf1);
// addFeedback(rf2);
// addFeedback(rf3);
// addFeedback(rf5);
// console.log(searchFeedback("starRating", "5"));