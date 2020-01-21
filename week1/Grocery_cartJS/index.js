var shopper = {
    firstName: "Jane",
    lastName: "Doe",
    shopperId: 101,
    active: true,
    groceryCart: ["apples", " bananas", " milk and cereal"],
    fullName: function() {
        return "Hello, " + this.firstName + " " + this.lastName + " " + "are a member? " + this.active + "," + " Your grocery cart has" + " " + this.groceryCart + ".";
    }

};
console.log(shopper.fullName());
// document.getElementById("demo").innerHTML = shopper.fullName(); // Remeber to uncomment when running HTML