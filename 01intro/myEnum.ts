//remember typescript code when complied to js you want it to be clean and readable
//so when you put const before enum complied code in js is short and simple 
//you can check this discussion in github a bit

//const
enum FlightSeat {
    SEAT1,
    SEAT2,
    SEAT3
}

console.log(FlightSeat[FlightSeat.SEAT1])

let customerSeat = FlightSeat.SEAT1
