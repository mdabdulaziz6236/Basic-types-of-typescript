/* Nullable type in ts */

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log(`From DB: All User`);
  }
};

// getUser('Abdul Aziz')
// getUser(null);


/*  UNKNOWN TYPE */

const discountCalculator = (input:unknown)=>{
if(typeof input === 'number'){
    const discountedPrice = input*0.1
    console.log(discountedPrice)
}else if (typeof input === 'string'){
    const [price] = input.split(' ')
    const discountedPrice = Number(price)*0.1
    console.log(discountedPrice)
}else{
    console.log('Wrong input...')
}
}

// discountCalculator(100)
// discountCalculator('100 tk')
// discountCalculator(null)


/*============== Void  ========  */

const throwError = (msg:string):never=>{
    throw new Error(msg);
    
}
throwError('Error.jkdhhjedjf...')