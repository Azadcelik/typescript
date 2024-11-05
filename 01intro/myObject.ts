


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