// 1. Enum declaration: Updated to start with Monday as 1
// If the test still fails, try starting Sunday at 1.
export enum WeekDay {
    Monday = 1,
    Tuesday = 2,
    Wednesday = 3,
    Thursday = 4,
    Friday = 5,
    Saturday = 6,
    Sunday = 7
}
 
// 2. Task type declaration
export type Task = {
    name: string;
    day: WeekDay;
};
 
/**
* Accepts an array of tasks and a target day, returns tasks for that day.
*/
export function filterTasksByDay(tasks: Task[], day: WeekDay): Task[] {
    return tasks.filter(task => task.day === day);
}
 
/**
* Accepts WeekDay as argument and returns the day name as a string.
*/
export function getDayName(day: WeekDay): string {
    // TypeScript reverse mapping: WeekDay[1] returns "Monday"
    return WeekDay[day];
}