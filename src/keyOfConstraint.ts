/* 
keyof : type operator

*/



type RichPeopleVehicle = {
    car:string, // key : value
    bike: string,
    cng:string
}

type MyVehicle1 = 'bike'| 'car'|'cng'
type MyVehicle2 = keyof RichPeopleVehicle


const myVehicle:MyVehicle2 = 'cng'

type User ={
    id:number,
    name:string,
    address:{
        city:string,
        isMarried?:boolean,
    }
}

const user:User ={
    id: 222,
    name: 'mezbah',
    address:{
        city:'dhaka',
        isMarried: true
    }
}

// const myName = user.name
const myNmae = user['name']
// const myId = user.id
const myId = user['id'] // correct
const address = user['address']

// console.log({
//     myId,myNmae, address
// })



const getPropertyFromObj = <X>(obj:X, key:keyof X)=>{
    return obj[key]
}

// const result1 = getPropertyFromObj(user,'address')
// console.log(result)

const product ={
    brand:'HP'
}
const student ={
    id: 24323,
    class:'four'
}
// const result2 = getPropertyFromObj(product,"brand")
// console.log(result2)

const result3 = getPropertyFromObj(student,'class')