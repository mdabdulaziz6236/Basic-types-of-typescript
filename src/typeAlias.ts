// In TypeScript, a type alias is a way to give a name to any type—be it a primitive, an object, a union, or even a function. It acts as a custom label that you can reuse throughout your code to make it more readable and maintainable
// টাইপস্ক্রিপ্টে, টাইপ অ্যালিয়াস হলো যেকোনো টাইপকে—সেটি প্রিমিটিভ, অবজেক্ট, ইউনিয়ন বা এমনকি একটি ফাংশনই হোক না কেন—একটি নাম দেওয়ার উপায়। এটি একটি কাস্টম লেবেল হিসেবে কাজ করে যা আপনি আপনার কোডকে আরও পাঠযোগ্য এবং রক্ষণাবেক্ষণযোগ্য করে তোলার জন্য সর্বত্র পুনরায় ব্যবহার করতে পারেন।

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: "01636775000";
  address: {
    division: string;
    city: string;
  };
};
const user1: User = {
  id: 2501101083,
  name: {
    firstName: "Abdul",
    lastName: "Aziz",
  },
  gender: "male",
  contactNo: "01636775000",
  address: {
    division: "Chittagong",
    city: "Noakhali",
  },
};
const user2: User = {
  id: 2501101083,
  name: {
    firstName: "Abdul",
    lastName: "Aziz",
  },
  gender: "male",
  contactNo: "01636775000",
  address: {
    division: "Chittagong",
    city: "Noakhali",
  },
};

type IsAdmin = true;
const isAdmin: IsAdmin = true;

type Name = string;
const myName: Name = "MD. Abdul Aziz";

// alias type in a function
type AddFunction = (num1: number, num2: number) => number;
const add:AddFunction = (num1, num2) => num1 + num2;


console.log(add(2,4))