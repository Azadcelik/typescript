let bUser: [number,string,boolean] 


bUser = [12,"12",true]

let rgb: [number, number, number] = [122,244,232]

type bUser = [number,string]

const newUser: bUser = [21,'myFirstName']

//this is the problem with the type checking here.Check in stackoverflow discussion about this
newUser.push(21)


