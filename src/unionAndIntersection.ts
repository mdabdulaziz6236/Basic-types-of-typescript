// union  ||


type UserRole = 'admin'| 'user'|'guest'

const getDashboard = ( role: UserRole)=>{
    if(role === 'admin'){
        return 'Admin Dashboard'
    }else if (role === 'guest'){
        return 'Guest Dashboard'
    }else{
        return 'User Dashboard'
    }
}
const data = getDashboard('guest')
console.log(data)



// intersection & 

type Employee ={
    id: number,
    name:string,
    phoneNo: number
}
type Manager ={
    designation : string,
    teamSize: number
}

type EmployeeManager = Employee & Manager
const ChowdhuryShaheb : EmployeeManager ={
    id:256,
name:'Chowdory',
phoneNo:6514651456,
designation: 'manager',
teamSize: 747

}