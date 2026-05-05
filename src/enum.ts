/* 

enum  = set of fixed string leteral ek jaigay rakhr

*/

//type UserRole = 'Admin' | 'Editor' |'viewer'


enum UserRole {
    Admin = 'Admin',
    Editor = 'Editor',
    Viewer = 'Viewer'
}

const canEdit = (role:UserRole)=>{
    if(role === UserRole.Admin|| role === UserRole.Editor){
        return true
    }else return false
}

const isEditPermissable = canEdit(UserRole.Admin)
console.log(isEditPermissable)