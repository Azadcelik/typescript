var user = {
    _id: 1,
    name: "azad",
    roleId: "staff",
    email: "azad@gmail.com",
    getCoupon: function () { return "myname"; },
    sellCoupon: function (name) {
        return 12;
    },
    githubTokenId: "21"
};
console.log(user);
var Onkology = /** @class */ (function () {
    function Onkology(name, dose) {
        this.name = name;
        this.dose = dose;
    }
    Onkology.prototype.createDose = function () {
        return "this is the dose of the medication";
    };
    return Onkology;
}());
var newPatient = new Onkology("ALexis", 244.21);
console.log(newPatient.createDose());
