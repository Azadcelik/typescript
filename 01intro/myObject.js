function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
// createUser({name: "azad", isPaid: true});
function createCourse(_a) {
    var string = _a.studentName, number = _a.price;
    return { studentName: "Azad", price: 245335 };
}
//you usuaally pass object to the function or you have to return some obhects through the function
function myTeamFunction(team) {
    console.log(team.color, team.price, team.championship);
}
myTeamFunction({ color: "Red", price: 1298323, championship: true });
function myCompanyName(team) {
    console.log(team, "how are you do bro");
    return { color: "Blue", price: 123, championship: false };
}
//you should create an instance of the Team type that your function expects as an argument
var anotherTeam = {
    color: "Orange",
    price: 0,
    championship: true
};
myCompanyName(anotherTeam);
function learnDisease(disease) {
    console.log(disease);
    return (disease);
}
var instanceDisease = {
    name: "Autism",
    severity: 5,
    treatment: "ABA"
};
learnDisease(instanceDisease);
var firstUser = {
    _id: "2",
    name: "Azad",
    email: "azad@gmail.com",
    age: 23
};
var userFunction = function (myfirstUser) {
    return firstUser;
};
console.log(userFunction(firstUser));
