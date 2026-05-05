/* টাইপস্ক্রিপ্টের জেনেরিকস একটি শক্তিশালী বৈশিষ্ট্য যা আপনাকে 
ফাংশন, ক্লাস এবং ইন্টারফেসের মতো পুনঃব্যবহারযোগ্য 
কম্পোনেন্টতৈরি করতে দেয় , যেগুলো 
কঠোর টাইপ সেফটি বজায় রেখে বিভিন্ন ধরনের 
ডেটা টাইপের সাথে কাজ করে। */

// dynamically generalize

type GenericArray<T> = Array<T>;

// const friends: string[] = ["mr.x", "mr.z", "mr.y"];
// const friends: Array<string> = ["mr.x", "mr.z", "mr.y"];
const friends: GenericArray<string> = ["mr.x", "mr.z", "mr.y"];

// const rollNumbers: number[] = [2, 5, 7, 44];
// const rollNumbers: Array<number> = [2, 5, 7, 44];
const rollNumbers: GenericArray<number> = [2, 5, 7, 44];

// const isEligibleList: boolean[] = [true, false, true, false];
// const isEligibleList: Array<boolean> = [true, false, true, false];
const isEligibleList: GenericArray<boolean> = [true, false, true, false];

type Coordinates<x, y> = [x, y];

const coordinates1: Coordinates<number, number> = [20, 34];
const coordinates2: Coordinates<string, string> = ["20", "34"];


// array of objects by generic ....
const userList: GenericArray<{name:string,age:number}> = [
  {
    name: "mr.s",
    age: 34,
  },
  {
    name: "mr.x",
    age: 34,
  },
  
];
