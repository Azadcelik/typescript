var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name,
            this.age = age;
    }
    return Person;
}());
var newPerson = new Person("Azad", 23);
console.log(newPerson);
var User = /** @class */ (function () {
    function User(name, age, userId) {
        this.name = name;
        this.age = age;
        this.userId = userId;
    }
    return User;
}());
var newUser = new User("Azad", 12, 111);
// console.log(newUser.age) // private can only be accessed within class not outside of class
var Laptop = /** @class */ (function () {
    function Laptop(brand, price) {
        this.brand = brand;
        this.price = price;
        //access modifier public is default 
        this._giftId = 2;
        this.giftNumber = 19;
    }
    Object.defineProperty(Laptop.prototype, "priceInfo", {
        get: function () {
            return "this is getting price info lol ".concat(this.price);
        },
        set: function (price) {
            this.price = price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Laptop.prototype, "giftId", {
        get: function () {
            return "this is the gift id: ".concat(this._giftId);
        },
        set: function (giftId) {
            this._giftId = giftId;
        },
        enumerable: false,
        configurable: true
    });
    return Laptop;
}());
var firstLaptop = new Laptop("Samsung", 2231);
console.log(firstLaptop.priceInfo);
firstLaptop.priceInfo = 21;
console.log(firstLaptop.priceInfo);
// firstLaptop.giftId = 99;
console.log(firstLaptop.giftId);
var Phone = /** @class */ (function (_super) {
    __extends(Phone, _super);
    function Phone() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Phone.prototype.changeGiftNumber = function (newGiftNumber) {
        return this.giftNumber = newGiftNumber;
    };
    return Phone;
}(Laptop));
var firstPhone = new Phone("Apple", 1099);
console.log(firstPhone.changeGiftNumber(88));
console.log(firstPhone);
