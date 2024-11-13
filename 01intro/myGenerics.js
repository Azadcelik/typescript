//generic reusable 
function identityOne(val) {
    return "Azad Celik";
}
console.log(identityOne(21));
function identityTwo(val) {
    return val;
}
console.log(identityTwo(123312312));
function identityThree(val) {
    return val;
}
console.log(identityThree("what a useful case lol"));
console.log(identityThree({ name: "Azad", age: 21 }));
