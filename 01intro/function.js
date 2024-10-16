"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//when you infer the type you better assign type so you can let typescript strictly check for type instead of any
//always try to avoid any type checking and always assign type if your fellow can do error such as using data as not supposed 
function addNumber(num) {
    return num + 5;
}
function signupUser(name, email, isPaid) {
    console.log(name, email, isPaid);
}
signupUser("Azad", "azadiyawelat@gmail.com", true);
console.log(addNumber(8));
