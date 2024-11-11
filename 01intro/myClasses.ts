class Person {
    public name: string
    public age: number
    private marriageStatus: string

    constructor(name: string, age: number){

        this.name = name,
        this.age = age
    }

}


const newPerson = new Person("Azad", 23);

console.log(newPerson)



class User {

    constructor(public name: string,private age: number, public userId: number)
    {

    }
}

const newUser = new User("Azad",12,111);

// console.log(newUser.age) // private can only be accessed within class not outside of class

class Laptop {
    //access modifier public is default 
    private _giftId: number = 2;

    //protected can be used in same classes and in any class which inherites protected class 
    protected giftNumber : number = 19;

    constructor(public brand: string, public price: number)
    {

    }

    get priceInfo(): string 
    {
        return `this is getting price info lol ${this.price}`
    }

    set priceInfo(price: number) 
    {
        this.price = price;
    }

    get giftId(): string 
    {
        return `this is the gift id: ${this._giftId}`
    }

    set giftId(giftId: number) 
    {
        this._giftId = giftId
    }
    
}
const firstLaptop = new Laptop("Samsung",2231);

console.log(firstLaptop.priceInfo)
firstLaptop.priceInfo= 21;
console.log(firstLaptop.priceInfo)

// firstLaptop.giftId = 99;
console.log(firstLaptop.giftId);


class Phone extends Laptop {

    changeGiftNumber(newGiftNumber: number): number {
        return this.giftNumber = newGiftNumber;
    }

}


const firstPhone = new Phone("Apple", 1099);
console.log(firstPhone.changeGiftNumber(88))


console.log(firstPhone)
