// ts basics
let commandToCompileTypeScriptFile = "tsc fileName.ts";
let commandToRunACompiledJSFile = "node fileName.js"; // Corrected to run the compiled JS file
let commandToRunATypeScriptFileInWatchMode = "tsc fileName.ts --watch"; // Corrected watch mode command

console.log(commandToCompileTypeScriptFile);
console.log(commandToRunACompiledJSFile);
console.log(commandToRunATypeScriptFileInWatchMode);

// Types in TypeScript
let nameOfPerson = "Cherish";
let age = 20;
let isEligibleToVote = true;
let currentSalary = 22877.52;
let company = "TCS";

console.log(nameOfPerson);
console.log(age);
console.log(isEligibleToVote);
console.log(currentSalary);
console.log(company);

// type annotations
let nameOfPerson2: string = "Cherish";
let age2: number = 20;
let isEligibleToVote2: boolean = true;
let currentSalary2: number = 22877.52;
let company2: string = "TCS";

// functions and type annotations
let areaOfCircle = (radius: number): number => {
  return radius * radius * Math.PI; // Corrected area formula
};

console.log(areaOfCircle(10));

// interfaces in typescript
interface Employee {
    name: string;
    role?: string; // ? denotes that it is optional to intialise this property while creating an object
    age: number; 
    getDetails():string
}

const emp: Employee = {
  name: "Cherish",
  age: 22,
  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
};

console.log(emp);

