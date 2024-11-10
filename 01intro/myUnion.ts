let scores: string | number = 3;

scores = "33"



type Users = {
    name: string,
    id: number
}

type Admin = {
    firstName: string,
    id: number | string
}

let Azad: Users | Admin = {name: "Azadiya welat", id: 23};


Azad = {firstName: "secondAzad", id: "23"}


console.log(Azad)

function getDatabaseId (id: number | string) {
    //so when you have optional case then for manipulation of data typescript should 
    // know exactly strictly data type.Other wise can not manipulate.So we use typeof to find strictly data type of it
    if (typeof id === "string")
    {
        id.toLowerCase()
    }
    else
    {
        id = id.toFixed()
    console.log(`tthis is my database id ${id}`)
    }
    
}

getDatabaseId(123312321.123)



const data: number[] = [1,2,3,5]
const data2: string[] = ["1","2","3"]

const data3: (number | string | boolean) [] = [1,"2",false]


//so this is a union type.I am telling the name values should either be azad or mehmet. 
let names: "Azad" | "Mehmet" 

