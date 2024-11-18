"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "hitesh",
    email: "hitesh@lco.dev",
    isActive: true
};
//Passing the object as parameter
function createUser(_a) {
    var String = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "hitesh", isPaid: false, email: "Suraj@gmail.com" };
createUser(newUser); //we can add the new field and pass a object as a parameter
createUser({ name: "Hitesh", isPaid: false });
function createCourse() {
    return { name: "reactjs", price: 399 };
}
//Pass the parameter which is of the type User
function generateUser(user) {
    return { name: "Virat", email: "virat@gmail.com", isActive: true };
}
console.log(generateUser({ name: "", email: "", isActive: true }));
var myUser = {
    _id: "12345",
    name: "h",
    email: "h@h.com",
    isActive: false,
};
myUser.email = "h@gmail.com";
