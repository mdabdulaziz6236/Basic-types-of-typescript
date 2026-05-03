// object destructuring
// array destructuring



const user ={
    id:12345,
    name:{
        firstName:'MD. ',
        middleName:'Abdul',
        lastName:'Aziz'
    },
    gender:'male',
    favouriteColor:'Green'
}
// const myFavouriteColor = user.favouriteColor
const myMiddleName = user.name.middleName

const{favouriteColor:myFavouriteColor, name:{middleName:majkhanernam}} =user
// console.log(myFavouriteColor , majkhanernam)


// array destructuring

const friends = [ 'karim', 'rahim',
    'monir'
]

// const myBestu = friends[1]
const [ ,myBestu]=friends

console.log(myBestu)