// ? : ternary operator : decision  making
// ?? : nullish coalescing operator : null/ undefined
// ?.  optional chaining ==== যদি থাকে তবে ।

const biyerJonnoEligible = (age: number) => {
  // using if else...

  // if(age>=21){
  //     console.log('You are eligible for Biye.')
  // }else{
  //     console.log('You are coci ...')
  // }

  /* using ternary operator */

  const result = age >= 21 ? "You are eligible" : "You are picchi babu";
  console.log(result);
  //   return result;
};

// biyerJonnoEligible(20);

/*  nulish coalescing operator */


// const userTheme = undefined;
const userTheme = null;

const selectedTheme = userTheme ?? "Light theme";

// console.log(selectedTheme);

const isAuthenticated = null;
const resultWithTernary = isAuthenticated ? isAuthenticated : "you are Guest";

const resultWithNulish = isAuthenticated ?? "you are guest";
// console.log({ resultWithNulish }, { resultWithTernary });
// console.log(typeof(undefined))


/* optional Chainig */

const user: {
    address:{
        city:string,
        town:string
    }
    postalCode?:string
}={
    address:{
        city:'dhaka',
        town:'banani'
    }
}
console.log(user?.postalCode)