

interface Developer<T,X=null>{
    name:string;
    salary:number;
    device:{
        brand:string;
        model:string;
        releasedYear:number;
    }
    smartWatch?:T
    bike?:X
}
interface BrandWatch {
    hartRate:number;
    stopWatch:boolean;
}
const poorDeveloper:Developer<BrandWatch> ={
    name:'Mr Poor',
    salary:343533,
    device:{
        brand:'symphony',
        model:'a34',
        releasedYear:2023,

    },
    smartWatch:{
        hartRate:344,
        stopWatch:true
    }
}

interface AppleWatch {
   hartRate:number;

    stopWatch:boolean;
}
const RichDeveloper:Developer<AppleWatch> ={
    name:'Mr Poor',
    salary:343533,
    device:{
        brand:'symphony',
        model:'a34',
        releasedYear:2023,

    },
    smartWatch:{
        hartRate:344,
        stopWatch:true
    }
}
