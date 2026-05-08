// maped types

// map


const arrayOfNum: number[] = [1, 4, 6];

const arrayOfString: string[] = ["1", "4", "6"];

const arrayOfStringUsingMap: string[] = arrayOfNum.map((num) => num.toString());

console.log(arrayOfStringUsingMap);

// type Area = {
//   height: number;
//   width: number;
// };

// type AreaOfString = {
//   height: string;
//   width: string;
// };

// type AreaOfString ={
//     [key in 'height'|'width']:string
// }
// type AreaOfBoolean ={
//     [key in 'height'|'width']:boolean
// }
// type AreaOfBoolean ={

//     [key in keyof Area]:boolean
// }

type Area<T>={
    [key in keyof T]:T[key]
}


// T >>> { height: string, width:string}


const area1 :Area<{height:string,width:boolean}> ={
    height:'50',
    width:false
}