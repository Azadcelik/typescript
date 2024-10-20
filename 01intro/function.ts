

//when you infer the type you better assign type so you can let typescript strictly check for type instead of any
//always try to avoid any type checking and always assign type if your fellow can do error such as using data as not supposed 
function addNumber(num: number) { 
    
    return num + 5
}


//always assign type for the variable in fucntion so you know what is been assigned to the variable as a value so you can be able to check data type
function signupUser(name: string,email: string, isPaid: boolean)
{
    console.log(name,email,isPaid)
}



signupUser("Azad","azadiyawelat@gmail.com",true)

console.log(addNumber(8));



//if you know what your function is gonna return and if it is returning just one type you can do this 
const myFunction = (myValue: number): boolean =>
{
    if (myValue > 10) return true;
    return false;
} 
console.log(myFunction(12))


const sayHi = (n: string):string => { 
    return "hey, what is up" + n;

}

console.log(sayHi("Azad"))

export{}



