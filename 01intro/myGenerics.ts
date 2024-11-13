//generic reusable and solves great deal 
//with any you can pass any type of argument and return differnet type of argument you passed
// but with generics it helps you too return same type of argument i guess

function identityOne(val: string | number): string | number {
    return "Azad Celik"
}

console.log(identityOne(21))

function identityTwo <Type>(val : Type): Type {
    return val;
}

console.log(identityTwo(123312312))

function identityThree<T> (val: T): T {
    return val;
}

console.log(identityThree("what a useful case lol"))

interface Computer {
    name: string,
    age: number
}

console.log(identityThree<Computer>({name : "Azad", age: 21}))


interface Bottle { 
    brand: string;
    type: number;
}


function searchProducts <T> (product: T[]): T { 
    return product[3]
}

function anotherFunctionAgain <T>(product: Array<T>): T {
    return product[2];
}


const moreSearcProducts = <T,> (product: T[]): T => {
    const indexOfProduct = 4;
    return product[indexOfProduct];
 };

