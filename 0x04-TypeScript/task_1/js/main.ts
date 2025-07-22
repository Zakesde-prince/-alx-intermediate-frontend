// Task 1: Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: false,
  contract: false,
};

console.log(teacher3);

// Task 2: Directors interface that extends Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// Task 3: printTeacherFunction interface and implementation
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Task 4: Student interfaces and class

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface for class
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing StudentInterface
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Zakhele", "Nkosi");
console.log(student.displayName());      // Output: Zakhele
console.log(student.workOnHomework());   // Output: Currently working

// DirectorInterface: expected methods for Director role
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface: expected methods for Teacher role
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Class implementing TeacherInterface
class TeacherRole implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Usage examples:
const director: DirectorInterface = new Director();
console.log(director.workFromHome());        // Output: Working from home
console.log(director.getCoffeeBreak());      // Output: Getting a coffee break
console.log(director.workDirectorTasks());   // Output: Getting to director tasks

const teacher: TeacherInterface = new TeacherRole();
console.log(teacher.workFromHome());          // Output: Cannot work from home
console.log(teacher.getCoffeeBreak());        // Output: Getting a coffee break
console.log(teacher.workTeacherTasks());      // Output: Getting to work

console.log(director1);

// Task 3: printTeacherFunction interface and implementation
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe

// Task 4: Student interfaces and class

// Interface for the constructor
interface StudentConstructor {
  new (firstName: string, lastName: string): StudentInterface;
}

// Interface for class
interface StudentInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing StudentInterface
class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("Zakhele", "Nkosi");
console.log(student.displayName());      // Output: Zakhele
console.log(student.workOnHomework());   // Output: Currently working

// Director interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}
