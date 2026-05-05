type User = {
  name: string;
  age: number;
  home?: string;
};
type Role = {
  role: "admin" | "user";
};
type UserWithRole = User & Role;

const user1: User = {
  name: "Abdul Aziz",
  age: 233,
};

const user2: UserWithRole = {
  name: "Abdullah",
  age: 34,
  home: "Noakhali",
  role: "admin",
};

/*  interface   = object type: array, object, function */

interface IUser {
  name: string;
  age: number;
}
interface IUserWithRole extends IUser {
  role: "admin" | "user";
}
const user3: IUser = {
  name: "Abdul Aziz",
  age: 233,
};

type IsAdmin = boolean;
const isAdmin: IsAdmin = true;

const user4: IUserWithRole = {
  name: "Rafiq",
  age: 343,
  role: "admin",
};
/////  function

type Add = (num1: number, num2: number) => number;

interface IAdd  {
    (num1:number,num2:number):number
}


// const add: Add = (num1, num2) => num1 + num2;
const add: IAdd = (num1, num2) => num1 + num2;



type Friends = string[]

interface IFriends {
    [index:number]:string
}


const friends:Friends =['Rafiq','Salam','Baker']
const friends2:IFriends =['Rafiq','Salam','Baker']

