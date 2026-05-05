/* 
conditional type : যে টাইফ কন্ডিশনাল এর উপর নির্ভর করে।

*/

type A = null;
type B = undefined;

type C = A extends number ? true : B extends undefined ? true : false;


type RichVahicle = {
    bike:string;
    car:string;
    ship:string
}

type CheckVahicle<T> = T extends keyof RichVahicle? true:false

// type HasBike = CheckVahicle<'cycle'> // false
type HasBike = CheckVahicle<'car'> // false