

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


const games = ["fifa", "call of duty", "city of god"];

const gamesValue = games.map(game => { 
   return `I loved this game which is called ${game}`;
});


gamesValue.map( val => { 
    console.log(val)
});



const numArr = [1,2,3,4,5,6,7,8];


const returnedNums = numArr.map((nums):string => { 
    console.log(nums.toString());
    return "hey"
})

console.log(returnedNums)


//first type of error function with void 

function errorMessage (errorMsg: string): void 
{
    console.log(errorMsg)
}


//second type of error which we handle error and use never 
function handleError (hndleErr: string): never
{
    throw new Error(hndleErr)
}




export{}



