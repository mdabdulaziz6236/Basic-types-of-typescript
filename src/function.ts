/// function
// arow function , normal function

function add(num1: number, num2: number) {
  return num1 + num2;
}

console.log(add(2, 3));

const add2 = (num1: number, num2: number): number => num1 - num2;

console.log(typeof add2(10, 3));

/// object => function => method

const poorUser = {
  name: "Abdul Aziz",
  balance: 0,
  addBalance(value: number) {
    return this.balance + value;
  },
};
// console.log(poorUser.addBalance(500), 'poorUser', poorUser)

const arr: number[] = [1, 3, 5, 7];
const sqrArray = arr.map((element: number):number => element * element);

console.log(sqrArray)