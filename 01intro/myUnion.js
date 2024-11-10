var scores = 3;
scores = "33";
var Azad = { name: "Azadiya welat", id: 23 };
Azad = { firstName: "secondAzad", id: "23" };
console.log(Azad);
function getDatabaseId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
    else {
        id = id.toFixed();
        console.log("tthis is my database id ".concat(id));
    }
}
getDatabaseId(123312321.123);
