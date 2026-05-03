// array , object

let bazarList: string[] = ["eggs", ",milk", "sugar"];
// bazarList.push(124);

let mixedArr: (string | number)[] = ["eggs", 12, "milk", 2];
// mixedArr.push(true);

let coordinates: [number, number] = [20, 30];

let couple: [string, string] = ["Husband", "wife"];

let nameAndRoll: [string, number] = ["Abdul Aziz", 99];

// reference type: object

// const user: {
// //   organization: string;
//   organization: 'programming hero  ,,';
//   firstName: string;
//   middleName?: string; /// optional type
//   lastName: string;
//   isMarried: boolean;
// } = {
//     organization:'programming hero  ,,',
//   firstName: "Abdul",
//   middleName: "Aziz",
//   lastName: "Aziz",
//   isMarried: true,
// };
// // user.organization = 'hi'
// console.log(user.organization)

const user: {
  //   organization: string;
  readonly organization: string;
  firstName: string;
  middleName?: string; /// optional type
  lastName: string;
  isMarried: boolean;
} = {
  organization: "programming hero  ,,",
  firstName: "Abdul",
  middleName: "Aziz",
  lastName: "Aziz",
  isMarried: true,
};
// user.organization=
console.log(user.organization);
