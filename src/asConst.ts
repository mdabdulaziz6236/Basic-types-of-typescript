/* 

as const   assertion

*/

// enum UserRole {

// }

const UserRole = {
  Admin: "Admin",
  Editor: "Editor",
  Viewer: "Viewer",
} as const;

/* 
   readonly Admin : 'Admin',
   readonly Editor : 'Editor',
   readonly Viewer : 'Viewer'
*/
// UserRole.Admin = 'mon chasse'

const canEdit = (role:keyof typeof UserRole) => {
  if (role === UserRole.Admin || role === UserRole.Editor) {
    return true;
  } else return false;
};

const isEditPermissable = canEdit(UserRole.Admin);
// console.log(isEditPermissable);


const ROLES = {
  ADMIN: "admin",
  USER: "user"
} as const;

type Role = (typeof ROLES)[keyof typeof ROLES]; // "admin" | "user"
const user:Role = 'admin'
console.log(user)