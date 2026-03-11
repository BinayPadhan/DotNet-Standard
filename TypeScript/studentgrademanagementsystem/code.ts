// DO NOT CHANGE THE NAME OF THE FUNCTION, CLASS, METHOD, OR PROPERTY.

// Declare the class as given in the description and export it 
export class Student {
    name: string;
    grades: number[];
    total: number;
    averageGrade: number = 0;

    constructor(name: string, grades: number[]) {
        this.name = name;
        this.grades = grades;
        // The value of the 'total' property must be the return value of the addGrades method
        this.total = this.addGrades();
    }

    addGrades(): number {
        // Calculate the total sum of the student's grades
        let sum = 0;
        for (let grade of this.grades) {
            sum += grade;
        }
        return sum;
    }

    getAverageGrade(): number {
        // If averageGrade is 0, calculate it using the total from addGrades
        if (this.averageGrade === 0) {
            const overallGrade = this.addGrades();
            this.averageGrade = overallGrade / this.grades.length;
        }
        return this.averageGrade;
    }
}

// Write the function and its implementation as defined in the description and export it
export function printStudentAverageGrades(students: Student[]): string[] {
    let output: string[] = [];
    
    for (const student of students) {
        // Fetch the average grade using the class method
        const avg = student.getAverageGrade();
        output.push(`${student.name}'s average grade is ${avg}`);
    }
    
    return output;
}

// Uncomment the following lines to check the output
/*
const alice = new Student('Alice', [80, 90, 85]);
const bob = new Student('Bob', [90, 85, 92]);
const charlie = new Student('Charlie', [78, 88, 80]);

const students = [alice, bob, charlie];

const averageGrades = printStudentAverageGrades(students);

for (const avg of averageGrades) {
   console.log(avg);
}
*/