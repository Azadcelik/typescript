


function createUser({name: string, isPaid: boolean}) {    
}

createUser({name: "azad", isPaid: true});



function createCourse({studentName:string, price:number}): {}{
    return {studentName: "Azad", price: 245335};
}




type Team = {
    color: string,
    price: number,
    championship: boolean
}



function myTeamFunction(team: Team): void {
    console.log(team.color,team.price,team.championship)
}


myTeamFunction({color: "Red",price: 1298323,championship: true})

