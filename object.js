"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    name: "Radhey",
    email: "radhey@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
createUser({ name: "Radhey", isPaid: true });
// createUser({name:"Radhey",isPaid:true,email:"ead"})
var user1 = { name: "radhey", isPaid: true, isActive: true };
createUser(user1);
function createCourse() {
    return { name: "react", price: 233 };
}
function createUserhere(user) {
}
createUserhere({ name: "Radhey", email: "temp@gmail.com", isActive: false });
var myUser2 = {
    _id: '12121',
    name: 'Radhey',
    email: 'radhey@gmail',
    isactive: true,
};
myUser2.email = 'h@gmail.com';
