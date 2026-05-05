"use strict";
/*

as const   assertion

*/
// enum UserRole {
// }
const UserRole = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};
/*
   readonly Admin : 'Admin',
   readonly Editor : 'Editor',
   readonly Viewer : 'Viewer'
*/
// UserRole.Admin = 'mon chasse'
const canEdit = (role) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit(UserRole.Admin);
console.log(isEditPermissable);
