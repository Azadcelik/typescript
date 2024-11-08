


function createUser({name: string, isPaid: boolean}) {    
}

// createUser({name: "azad", isPaid: true});



function createCourse({studentName:string, price:number}): {}{
    return {studentName: "Azad", price: 245335};
}




type Team = {
    color: string,
    price: number,
    championship: boolean
}


//you usuaally pass object to the function or you have to return some obhects through the function
function myTeamFunction(team: Team): void {
    console.log(team.color,team.price,team.championship)
}


myTeamFunction({color: "Red",price: 1298323,championship: true})


function myCompanyName(team:Team): {color:string,price:number,championship:boolean} {
    console.log(team,"how are you do bro")
    return {color: "Blue",price: 123,championship: false}

}

//you should create an instance of the Team type that your function expects as an argument
const anotherTeam: Team = {
    color: "Orange",
    price: 0,
    championship: true
}


myCompanyName(anotherTeam)


type Disease = {
    name: string;
    severity : number;
    treatment : string;
}

function learnDisease(disease:Disease): Disease {
    console.log(disease)
    return(disease)
}


const instanceDisease:Disease = {
    name: "Autism",
    severity: 5,
    treatment: "ABA"
}
learnDisease(instanceDisease)


type User = {
    //readonly is for not manipulating or changing value of  the object
    readonly _id : string,
    name: string,
    email : string,
    age : number
    //question mark before colon is optional
    carDetails?: number
}

let firstUser: User = {
    _id: "2",
    name: "Azad",
    email: "azad@gmail.com",
    age: 23
}

const userFunction = (myfirstUser: User): User => {
    return firstUser
}
console.log(userFunction(firstUser))
