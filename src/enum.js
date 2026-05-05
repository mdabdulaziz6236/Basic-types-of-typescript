"use strict";
/*

enum  = set of fixed string leteral ek jaigay rakhr

*/
//type UserRole = 'Admin' | 'Editor' |'viewer'
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "Admin";
    UserRole["Editor"] = "Editor";
    UserRole["Viewer"] = "Viewer";
})(UserRole || (UserRole = {}));
const canEdit = (role) => {
    if (role === UserRole.Admin || role === UserRole.Editor) {
        return true;
    }
    else
        return false;
};
const isEditPermissable = canEdit(UserRole.Admin);
console.log(isEditPermissable);
