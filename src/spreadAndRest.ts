// spread & rest

const friends = ["rahim", "karim"];
const Schoolfriends = ["Sabbir", "rafiq", "Maruf"];
const universityFriends = ["Habib", "Mahdi", "Abdur Rahman"];
friends.push(...Schoolfriends);
// console.log(friends)

const user = {
  name: "Abdul Aziz",
  phone: "01561651465",
};
const otherInfo = {
  hobby: "Reciting the Holy Quran ",
  favouriteColor: "Green",
};
const userInfo = { ...user, ...otherInfo };
// console.log(userInfo);

// Rest Operator
// const sendInvitation = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`Sent invitation to ${friend1}`);
//   console.log(`Sent invitation to ${friend2}`);
//   console.log(`Sent invitation to ${friend3}`);
// };

// sendInvitation('Rafiq','Arafat','Sabbir')
const sendInvitation = (...friends:string[]) => {
    friends.forEach(friend=> {
        console.log(`Send invitation to ${friend}`)
    } )
};

sendInvitation('Rafiq','Arafat','Sabbir', 'hi','hello')