interface User {

    readonly _id : number,
    name :string,
    email: string,
    getCoupon: () => string
    sellCoupon(name : string): number

}

//it is called reopening the file.Adding new fields to an existing interface which not possible with type
interface User {
    githubTokenId: string
}


interface Admins extends User{
    roleId: "admin" |"ta" | "staff"
}




let user: Admins = {
    _id : 1,
    name: "azad",
    roleId: "staff",
    email: "azad@gmail.com",
    getCoupon: () => "myname",
    sellCoupon: (name: "hey") => {
        return 12;
    },
    githubTokenId : "21"
}

console.log(user)



interface Medication {
    name: string;
    dose: number;
    createDose(): string
}


class Onkology implements Medication {

    constructor(public name: string, public dose: number) {
  
    }


    createDose(): string {
        return `this is the newly created dose  of the medication`
    }

}


const newPatient = new Onkology("ALexis", 244.21);
console.log(newPatient.createDose())