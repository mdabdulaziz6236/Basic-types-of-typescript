/* 

constraint : strict rules deya

*/

//
interface Student {
  id: number;
  name: string;
  dateOfBirth: string;
  class: number;
}

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 124,
  name: "Mezbah",
  hasPen: true,
  dateOfBirth:'kkdj',
  class:3
};

const student2 = {
  id: 2343,
  name: "Rafuqul Islam ",
  hasCar: true,
  isMarried: false,
};
const student3 = {
  id: 345,
  name: "mr. rs",
  isMarried: true,
};

const result = addStudentToCourse(student1);
// const result23 = addStudentToCourse(student2);
// const result234 = addStudentToCourse(student3);
// console.log({result23, result})
console.log(result);
