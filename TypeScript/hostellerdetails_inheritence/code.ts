/*
Notes: 
1. DONOT modify the code skeleton
2. Order of the functions given in the code skeleton should not be changed.
3. Comment the console.log() statements before evaluating the code.
*/

export class StudentDetails {
  studentId: string;
  studentName: String;
  mobileNumber: number;
  departmentName: string;
  cgpa: number;

  constructor(studentId: string, studentName: String, mobileNumber: number, departmentName: string, cgpa: number) {
    // Fill your code here
    this.studentId = studentId;
    this.studentName = studentName;
    this.mobileNumber = mobileNumber;
    this.departmentName = departmentName;
    this.cgpa = cgpa;
  }

  calculateFees(): number {
    // Fill your code here
    let fees: number = 0;

    // Determine base fees based on department
    switch (this.departmentName) {
      case "ECE":
        fees = 80000;
        break;
      case "CSE":
        fees = 100000;
        break;
      case "IT":
        fees = 90000;
        break;
      case "Mechanical":
        fees = 85000;
        break;
      case "EEE":
        fees = 75000;
        break;
      default:
        fees = 0;
    }

    // Apply 20% discount if CGPA >= 8
    if (this.cgpa >= 8) {
      fees = fees - (fees * 0.20);
    }

    return fees;
  }
}

export class HostellerDetails extends StudentDetails {
  Hostelname: string;
  roomNo: number;

  constructor(studentId: string, studentName: String, mobileNumber: number, departmentName: string, cgpa: number, Hostelname: string, roomNo: number) {
    // Fill your code here
    // Call the parent class constructor using super
    super(studentId, studentName, mobileNumber, departmentName, cgpa);
    this.Hostelname = Hostelname;
    this.roomNo = roomNo;
  }

  calculateTotalFees(): number {
    // Fill your code here
    const hostelFees = 20000;
    // Invoke calculateFees() from StudentDetails and add hostel fees
    const collegeFees = this.calculateFees();
    return collegeFees + hostelFees;
  }
}

// Uncomment below lines of code to debug the functions

// let Hosteller1 = new HostellerDetails("S01","jansy",9876540987,"ECE",8.5,"ganga_block1",12);
// console.log(Hosteller1.calculateTotalFees()); // Output: 84000

// let Hosteller2 = new HostellerDetails("S02","johny",76854367542,"IT",7.5,"ganga_block1",12);
// console.log(Hosteller2.calculateTotalFees()); // Output: 110000