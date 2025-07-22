/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

import Subjects = require('./subjects/Cpp');
import SubjectsJava = require('./subjects/Java');
import SubjectsReact = require('./subjects/React');
import { Teacher as BaseTeacher } from './subjects/Teacher';

// Create and export constants for each subject
export const cpp = new Subjects.Cpp();
export const java = new SubjectsJava.Java();
export const react = new SubjectsReact.React();

// Create and export a Teacher object cTeacher with experienceTeachingC = 10
export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
};

// Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

// Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

// React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
