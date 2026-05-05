/* GENERIC FUNCTION */

// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithBoolean = (value: boolean) => [value];

// const createArrayWithUserObj = (value: { id: number; name: string }) => {
//   return [value];
// };

const createArrWithGeneric = <T>(value: T) => {
  return [value];
};
// const arrString = createArrayWithString('Apple')
const arrString = createArrWithGeneric("Apple");

// const arrNumber = createArrayWithNumber(222)
const arrNumber = createArrWithGeneric(222);
// const arrBoolean = createArrayWithBoolean(true)
const arrBoolean = createArrWithGeneric(true);
// const arrObj = createArrayWithUserObj({
//     id:1234, name:'Abdul Aziz'
// })
const arrObj = createArrWithGeneric({
  id: 1234,
  name: "Abdul Aziz",
});

// tuple

const createArrayWithTupple = (param1: string, param2: string) => [
  param1,
  param2,
];

const createArrTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const result1 = createArrTupleWithGeneric('mezbah',true)
const result2 = createArrTupleWithGeneric('mezbah',222)
const result3 = createArrTupleWithGeneric(false,'nakk')





//


const addStudentToCourse = <T>(studentInfo:T)=>{
    return {
        course:'Next Level',
        ...studentInfo
    }
}

const student1 ={
    id: 124,
    name:'Mezbah',
    hasPen: true,
}

const student2 ={
    id:2343,
    name:"Rafuqul Islam ",
    hasCar: true,
    isMarried: false
}

const result = addStudentToCourse(student1)
const result23 = addStudentToCourse(student2)
console.log({result23, result})
